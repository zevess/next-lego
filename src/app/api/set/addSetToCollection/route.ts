import { prisma } from "@/lib/prisma/prisma";
import { SetData } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const set: SetData = body.set;

    try {
        const existingSet = await prisma.set.findFirst({
            where: {
                set_num: set.set_num,
                OR: [
                    { inWishesId: body.userId },
                    { inCollectionId: body.userId }
                ]

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
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        return NextResponse.json({ error: "Произошла ошибка при обработке запроса" }, { status: 500 });
    }
}