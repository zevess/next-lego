import { prisma } from "@/lib/prisma/prisma";
import { SetDataJSON } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const set: SetDataJSON = body.set;

    try {
        // Находим желания и коллекцию текущего пользователя
        const userWishes = await prisma.set.findMany({
            where: {
                inWishesId: body.userId
            }
        })
        const userCollection = await prisma.set.findMany({
            where: {
                inCollectionId: body.userId
            }
        })

        // Проверяем, существует ли набор в базе данных
        const existingSet = await prisma.set.findFirst({
            where: {
                set_num: set.set_num,
                OR: [
                    { inWishesId: body.userId },
                    { inCollectionId: body.userId }
                ]
                // OR: [
                //     { inWishesId: userWishes?.id }, // Набор в желаниях текущего пользователя
                //     { inCollectionId: userCollection?.id }, // Набор в коллекции текущего пользователя
                // ],
            },
        });

        if (existingSet) {
            if (existingSet.inCollectionId === body.userId) {
                await prisma.set.delete({
                    where: {
                        id: existingSet.id
                    }
                })
                return NextResponse.json({ message: "Набор удален из коллекции" });
            }
            else if (existingSet.inWishesId === body.userId) {
                return NextResponse.json({ message: "Набор уже добавлен в желания" });
            }
        } else{
                const newSet = await prisma.set.create({
                data: {
                    name: set.name,
                    set_num: set.set_num,
                    year: set.year,
                    theme_id: set.theme_id,
                    num_parts: set.num_parts,
                    set_img_url: set.set_img_url,
                    set_url: set.set_url,
                    inCollectionId: body.userId
                },
            });
            return NextResponse.json({ newSet, message: "Набор добавлен в коллекцию" });
        }
        // if (existingSet) {
        //     // Если набор уже находится в желаниях текущего пользователя
        //     if (existingSet.collectionId === userCollection?.id) {
        //         // Удаляем набор из желаний (убираем связь)
        //         await prisma.set.delete({
        //             where: {
        //                 id: existingSet.id,
        //             },
        //         });
        //         return NextResponse.json({ message: "Набор удален из коллекции" });
        //     }
        //     // Если набор уже находится в коллекции текущего пользователя
        //     else if (existingSet.wishesId === userWishes?.id) {
        //         return NextResponse.json({ message: "Набор уже добавлен в желания" });
        //     }
        // } else {
        //     // Если набора нет ни в желаниях, ни в коллекции текущего пользователя
        //     const newSet = await prisma.set.create({
        //         data: {
        //             name: set.name,
        //             set_num: set.set_num,
        //             year: set.year,
        //             theme_id: set.theme_id,
        //             num_parts: set.num_parts,
        //             set_img_url: set.set_img_url,
        //             set_url: set.set_url,
        //             collection: {
        //                 connectOrCreate: {
        //                     where: {
        //                         userId: body.userId
        //                     },
        //                     create: {
        //                         userId: body.userId,
        //                     },
        //                 },
        //             },
        //         },
        //     });
        //     return NextResponse.json({ newSet, message: "Набор добавлен в коллекцию" });
        // }
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        return NextResponse.json({ error: "Произошла ошибка при обработке запроса" }, { status: 500 });
    }
}