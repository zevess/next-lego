import { prisma } from "@/lib/prisma/prisma";
import { SetDataJSON } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const set: SetDataJSON = body.set;

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
            if (existingSet.inWishesId === body.userId) {
                await prisma.set.delete({
                    where: {
                        id: existingSet.id
                    }
                })
                return NextResponse.json({ message: "Набор удален из желаний" });
            }
            else if (existingSet.inCollectionId === body.userId) {
                return NextResponse.json({ message: "Набор уже добавлен в коллекцию" });
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
                    inWishesId: body.userId
                },
            });
            return NextResponse.json({ newSet, message: "Набор добавлен в желания" });
        }
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        return NextResponse.json({ error: "Произошла ошибка при обработке запроса" }, { status: 500 });
    }
}