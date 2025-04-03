"use server"

import { User } from "@prisma/client"
import { headers, SetData, testData } from "../types"
import { getUserCollection, getUserWishes } from "./user"
import { prisma } from "../prisma/prisma"

export const addSetToCollection = async (set: SetData, userId: string) => {
    const newSet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/set/addSetToCollection`, {
        method: "POST",
        body: JSON.stringify({ set: set, userId: userId })
    })
    return newSet.json()
}

export const addSetToWishes = async (set: SetData, userId: string) => {
    const newSet = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/set/addSetToWishes`, {
        method: "POST",
        body: JSON.stringify({ set: set, userId: userId })
    })
    return newSet.json()
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



export const getDataTest = async (page: number, searchQuery: string, ) => {
    return { page, testData, searchQuery }
}



