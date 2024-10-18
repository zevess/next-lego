import prisma from "@/prisma/prisma-client"
import { Set, UserCollection } from "@prisma/client"
import { NextResponse } from "next/server"

export const getUser = async (userId: string) => {
    return await prisma.user.findFirst({
        where: {
            id: userId
        }
    })
}

export const addSetToCollection = async (set: Set, userId: string) => {
    try {
        const newSet = await prisma.set.create({
            data: {
                name: set.name,
                setNum: set.setNum,
                year: set.year,
                themeId: set.themeId,
                numParts: set.numParts,
                setImageUrl: set.setImageUrl,
                setUrl: set.setUrl,
                collection: {
                    connectOrCreate: {
                        where: {
                            userId: userId
                        },
                        create: {
                            userId: userId
                        }
                    }
                }
            },
        });

        return NextResponse.json(newSet); // Вернуть новый набор
    } catch (error) {
        return NextResponse.json(error); // Вернуть ошибку
    }
}


// try {
//     const newSet = await prisma.set.create({
//         data: {
//             name: set.name,
//             setNum: set.setNum,
//             year: set.year,
//             themeId: set.themeId,
//             numParts: set.numParts,
//             setImageUrl: set.setImageUrl,
//             setUrl: set.setUrl,
//             collection: {
//                 connectOrCreate: {
//                     where: {
//                         userId: userId
//                     },
//                     create: {
//                         userId: userId
//                     }
//                 }
//             }
//         },
//     });

//     return NextResponse.json(newSet); // Вернуть новый набор
// } catch (error) {
//     return NextResponse.json(error); // Вернуть ошибку
// }