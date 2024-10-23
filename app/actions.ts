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

export const addSetToCollection = async(set: SetDataJSON, userId: string) => {
    const newSet = await fetch('http://localhost:3000/api/set',{
        method: "POST",
        body: JSON.stringify({set: set, userId: userId})
    })
    return newSet.json()
}


// export const addSetToCollection = async (set: SetDataJSON, userId: string) => {
//     try {
//         console.log(set);

//         await prisma.set.create({
//             data: {
//                 name: set.name,
//                 setNum: set.set_num,
//                 year: set.year,
//                 themeId: set.theme_id,
//                 numParts: set.num_parts,
//                 setImageUrl: set.set_img_url,
//                 setUrl: set.set_url,
//                 collection: {
//                     connectOrCreate: {
//                         where: {
//                             userId: userId
//                         },
//                         create: {
//                             userId: userId
//                         }
//                     }
//                 }
//             },
//         });

//         // return NextResponse.json(newSet);
//     } catch (error) {
//         console.error(error)
//         return NextResponse.json(error);
//     }
// }

export const getUserCollection = async (userId: string) => {

    const userCollection =  await prisma.userCollection.findFirst({
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


export const getSingleSet = async (setNum: string) => {
    const set = await fetch(`https://rebrickable.com/api/v3/lego/sets/${setNum}/`, {
        method: "GET",
        headers: headers
    })

    return set.json()

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
