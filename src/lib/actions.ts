"use server"
import { schema } from "@/lib/schema";
import { prisma } from "./prisma/prisma";
import { headers, productProps, SetDataJSON, testData } from "./types";
import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt"
import axios from "axios";
import { User } from "@prisma/client";

export const providerLogin = async (provider: string) => {
    await signIn(provider, {
        redirectTo: '/'
    });
    revalidatePath("/");
}

export const logout = async () => {
    await signOut({
        redirectTo: '/'
    });
    revalidatePath("/")
}

export const credentialsSignIn = async (formData: FormData) => {

    try {
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })

        if (res.error) {
            return { error: true, message: res.error };
        }

        return res;
    } catch (error) {
        console.log(error)
        return { error: true, message: "Неверный email или пароль" };
    }

}

export const credentialsSignUp = async (formData: FormData) => {
    try {
        const email = formData.get("email");
        const password = formData.get("password");

        if (password && String(password).length < 6) {
            return { error: true, message: "Пароль слишком короткий, минимум 6 символов" };
        }

        const validatedData = schema.parse({ email, password });

        const user = await prisma.user.findFirst({
            where: {
                email: validatedData.email,
            },
        });

        if (user) {
            return { error: true, message: "Пользователь уже существует" };
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(validatedData.password, salt);

        await prisma.user.create({
            data: {
                email: validatedData.email.toLocaleLowerCase(),
                password: hash,
            },
        });

        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        });

        if (res.error) {
            return { error: true, message: res.error };
        }

        return res;
    } catch (error) {
        console.log(error)
        return { error: true, message: "Произошла непредвиденная ошибка при регистрации" };
    }
};

export const getUser = async (userId: string) => {
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        }
    })
    return user
}

export const getUserByNick = async (userNick: string) => {
    return await prisma.user.findFirst({
        where: {
            userNick: userNick
        }
    })
}


export const uploadImageToImgbb = async (file: File) => {
    const body = new FormData();
    body.set('key', `${process.env.IMGBB_KEY}`);
    body.append('image', file);

    const response = await axios.post('https://api.imgbb.com/1/upload', body);
    return response.data.data.url;
};

export const updateProfile = async (userId: string, newUserNick: string, newName: string | null, imageUrl: string | undefined) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('newUserNick', newUserNick);
    formData.append('newName', newName ?? '');
    if (imageUrl) {
        formData.append('imageUrl', imageUrl);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, newUserNick, newName, imageUrl })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Ошибка при обновлении профиля');
    }

    return data;
};

export const addSetToCollection = async (set: SetDataJSON, userId: string) => {
    const newSet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/set/addSetToCollection`, {
        method: "POST",
        body: JSON.stringify({ set: set, userId: userId })
    })
    return newSet.json()
}

export const addSetToWishes = async (set: SetDataJSON, userId: string) => {
    const newSet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/set/addSetToWishes`, {
        method: "POST",
        body: JSON.stringify({ set: set, userId: userId })
    })
    return newSet.json()
}

export const getUserCollection = async (userId: string) => {

    const userCollection = await prisma.set.findMany({
        where: {
            inCollectionId: userId
        }
    })

    return userCollection

}

export const getUserWishes = async (userId: string) => {

    const userWishes = await prisma.set.findMany({
        where: {
            inWishesId: userId
        }
    })

    return userWishes

}

export const getSingleSet = async (setNum: string, userId: string) => {

    const userWishes = await getUserWishes(userId);
    const userCollection = await getUserCollection(userId);

    const userWishesIds = userWishes ? userWishes.map((item) => item.set_num) : "";
    const userCollectionIds = userCollection ? userCollection.map((item) => item.set_num) : "";

    const isWish = userWishesIds.includes(setNum);
    const isOwn = userCollectionIds.includes(setNum);

    const set = await fetch(`https://rebrickable.com/api/v3/lego/sets/${setNum}/`, {
        method: "GET",
        headers: headers
    })

    const setResult = await set.json()

    const setData = {
        set: setResult,
        isOwn: isOwn,
        isWish: isWish,
        userId: userId
    }

    return setData

}

export const getSets = async (page: number, searchQuery?: string, themeId?: number, minYear?: number, maxYear?: number) => {
    const sets = await fetch(`https://rebrickable.com/api/v3/lego/sets/?page=${page}&page_size=50${themeId ? `&theme_id=${themeId}` : ""}&min_year=${minYear ? minYear : 1949}&max_year=${maxYear ? maxYear : 2025}&search=${searchQuery}`, {
        method: "GET",
        headers: headers
    })

    return sets.json();
}

export const getUsersByOwnSet = async (setNum: string): Promise<User[]> => {

    const usersCollectionsSet = await prisma.set.findMany({
        where: {
            set_num: setNum,
            inCollectionId: { not: null }
        },
        include: {
            inCollection: true
        }
    })

    const usersArray: User[] = usersCollectionsSet
        .map((item) => item.inCollection)
        .filter((user): user is User => user !== null)

    return usersArray;

}

export const getUsersByWishSet = async (setNum: string): Promise<User[]> => {
    const usersWishesSet = await prisma.set.findMany({
        where: {
            set_num: setNum,
            inWishesId: { not: null }
        },
        include: {
            inWishes: true
        }
    });

    const usersArray: User[] = usersWishesSet
        .map((item) => item.inWishes)
        .filter((user): user is User => user !== null)

    return usersArray;

}

export const createProduct = async (product: productProps) => {
    const newSet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/marketplace/createProduct`, {
        method: "POST",
        body: JSON.stringify(product)
    })
    return newSet.json()
}

export const getProduct = async (productId: string) => {
    return await prisma.product.findFirst({
        where: {
            id: productId
        },
        include: {
            user: true
        }
    })
}

export const getDataTest = async (searchQuery: string, page: number) => {
    return { page, testData, searchQuery }
}



