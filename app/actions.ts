import prisma from "@/prisma/prisma-client"
import { headers, SetDataJSON, testData } from "@/utils/types"


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

export const updateUserNickAndName = async (userId: string, newUserNick: string, newName: string | null) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, newUserNick, newName })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Ошибка при обновлении ника');
    }

    return data;
}

export const addSetToCollection = async (set: SetDataJSON, userId: string) => {
    const newSet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/set`, {
        method: "POST",
        body: JSON.stringify({ set: set, userId: userId, type: "collection" })
    })
    return newSet.json()
}

export const removeSetFromCollection = async (set: SetDataJSON, userId: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/set`, {
        method: "DELETE",
        body: JSON.stringify({ set: set, userId: userId, type: "collection" })
    })

}

export const addSetToWishes = async (set: SetDataJSON, userId: string) => {
    const newSet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/set`, {
        method: "POST",
        body: JSON.stringify({ set: set, userId: userId, type: "wishes" })
    })
    return newSet.json()
}

export const removeSetFromWishes = async (set: SetDataJSON, userId: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/set`, {
        method: "DELETE",
        body: JSON.stringify({ set: set, userId: userId, type: "wishes" })
    })

}

export const getUserCollection = async (userId: string) => {

    const userCollection = await prisma.userCollection.findFirst({
        where: {
            userId: userId
        }
    })

    if (userCollection == null) {
        return ""
    } else {
        return await prisma.set.findMany({
            where: {
                collectionId: userCollection?.id
            }
        })
    }

}

export const getUserWishes = async (userId: string) => {

    const userWishes = await prisma.userWishes.findFirst({
        where: {
            userId: userId
        }
    })

    if (userWishes == null) {
        return ""
    } else {
        return await prisma.set.findMany({
            where: {
                wishesId: userWishes?.id
            }
        })
    }

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

    const setData = {
        set: await set.json(),
        isOwn: isOwn,
        isWish: isWish,
        userId: userId
    }

    return setData

}

export const getSets = async (page: number, searchQuery?: string, themeId?: number, minYear?: number, maxYear?: number) => {
    const sets = await fetch(`https://rebrickable.com/api/v3/lego/sets/?page=${page}&page_size=50${themeId ? `&theme_id=${themeId}` : ""}&min_year=${minYear}&max_year=${maxYear}&search=${searchQuery}`, {
        method: "GET",
        headers: headers
    })

    return sets.json();
}

export const getUsersByOwnSet = async (setNum: string) => {
    const usersWithSet = await prisma.user.findMany({
        where: {
            collection: {
                some: {
                    sets: {
                        some: {
                            set_num: setNum,
                        },
                    },
                },
            },
        },
        include: {
            collection: {
                include: {
                    sets: true,
                },
            },
        },
    });

    return usersWithSet;

}

export const getUsersByWishSet = async (setNum: string) => {
    const usersWishesSet = await prisma.user.findMany({
        where: {
            wishes: {
                some: {
                    sets: {
                        some: {
                            set_num: setNum,
                        },
                    },
                },
            },
        },
        include: {
            wishes: {
                include: {
                    sets: true,
                },
            },
        },
    });

    return usersWishesSet;

}


export const getDataTest = async (searchQuery: string, page: number) => {
    return { page, testData, searchQuery }
}
