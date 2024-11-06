import prisma from "@/prisma/prisma-client"
import { headers, SetData, SetDataJSON, testData } from "@/utils/types"
import { Set, UserCollection } from "@prisma/client"
import { NextResponse } from "next/server"

export const getUser = async (userId: string) => {
    return await prisma.user.findFirst({
        where: {
            id: userId
        }
    })
}

export const addSetToCollection = async (set: SetDataJSON, userId: string) => {
    const newSet = await fetch('http://localhost:3000/api/set', {
        method: "POST",
        body: JSON.stringify({ set: set, userId: userId, type: "collection" })
    })
    return newSet.json()
}

export const removeSetFromCollection = async (set: SetDataJSON, userId: string) => {
    await fetch('http://localhost:3000/api/set', {
        method: "DELETE",
        body: JSON.stringify({ set: set, userId: userId, type: "collection" })
    })

}

export const addSetToWishes = async (set: SetDataJSON, userId: string) => {
    const newSet = await fetch('http://localhost:3000/api/set', {
        method: "POST",
        body: JSON.stringify({ set: set, userId: userId, type: "wishes" })
    })
    return newSet.json()
}

export const removeSetFromWishes = async (set: SetDataJSON, userId: string) => {
    await fetch('http://localhost:3000/api/set', {
        method: "DELETE",
        body: JSON.stringify({ set: set, userId: userId, type: "wishes" })
    })

}


// export const removeSetFromCollection = async(set: SetDataJSON, userId: string) =>{

//     const userCollection =  await prisma.userCollection.findFirst({
//         where: {
//             userId: userId
//         }
//     })

//     await prisma.set.deleteMany({
//         where: {
//             set_num: set.set_num,
//             collectionId: userCollection?.id 
//         }
//     })       
// }

export const getUserCollection = async (userId: string) => {

    const userCollection = await prisma.userCollection.findFirst({
        where: {
            userId: userId
        }
    })

    return await prisma.set.findMany({
        where: {
            collectionId: userCollection?.id
        }
    })

}

export const getUserWishes = async (userId: string) => {

    const userWishes = await prisma.userWishes.findFirst({
        where: {
            userId: userId
        }
    })

    return await prisma.set.findMany({
        where: {
            wishesId: userWishes?.id
        }
    })

}

export const getSingleSet = async (setNum: string, userId: string) => {
    
    const userWishes = await getUserWishes(userId);
    const userCollection = await getUserCollection(userId);

    const userWishesIds = userWishes.map((item) => item.set_num);
    const userCollectionIds = userCollection.map((item) => item.set_num);

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

export const getSets = async (searchQuery: string) => {
    const sets = await fetch(`https://rebrickable.com/api/v3/lego/sets/?search=${searchQuery}`, {
        method: "GET",
        headers: headers
    })

    return sets.json();
}


export const getDataTest = async (searchQuery: string) => {
    return { testData, searchQuery }
    // const data = await fetch(`https://api.agify.io?name=${searchQuery}`);
    // return data.json();
}
