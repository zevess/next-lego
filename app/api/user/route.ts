import prisma from "@/prisma/prisma-client"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const userId = req.nextUrl.searchParams.get("userId")?.toString()

        const user = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })

        if (user) {
            return NextResponse.json(user)
        }
        else {
            return NextResponse.json({ error: "Пользователь не найден" }, { status: 500 })
        }

    } catch (error) {
        return NextResponse.json({ error: "ошибка" }, { status: 500 })
    }
}


export async function PATCH(req: NextRequest) {
    const body = await req.json();
    const newUserNick = body.newUserNick;
    const newName = body.newName
    const userId = body.userId

    try {

        const isNickTaken = await prisma.user.findFirst({
            where: {
                userNick: newUserNick
            }
        })

        if (isNickTaken) {
            return NextResponse.json({ message: "Имя уже занято. Попробуйте другое" }, {status: 400})
        } else {
            const updatedUserNick = await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    userNick: newUserNick,
                    name: newName
                }
            })
            return NextResponse.json(updatedUserNick, {status: 200});
        }
    } catch (error) {
        return NextResponse.json({ error });

    }
}