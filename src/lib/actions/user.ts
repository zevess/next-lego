import axios from "axios"
import { prisma } from "../prisma/prisma"

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
    body.set('key', `${process.env.NEXT_PUBLIC_IMGBB_KEY}`);
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