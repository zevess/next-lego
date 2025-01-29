
import { prisma } from "@/lib/prisma/prisma";
import axios from "axios";
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
        return NextResponse.json({ error }, { status: 500 });
    }
}


export async function PATCH(req: NextRequest) {
    const formData = await req.formData();
    const newUserNick = formData.get('newUserNick')?.toString();
    const newName = formData.get('newName')?.toString();
    const userId = formData.get('userId')?.toString();
    const newAvatarUrl = formData.get('imageUrl')?.toString();

    try {

        const isNickTaken = await prisma.user.findFirst({
            where: {
                userNick: newUserNick
            }
        })

        if (newUserNick && (newUserNick.length == 0 || newUserNick.length < 4)) {
            return NextResponse.json({ message: "Ник слишком короткий. Минимум 4 символа" }, { status: 400 })
        }

        if (newName && (newName.length == 0 || newName.length < 4)) {
            return NextResponse.json({ message: "Имя слишком короткое. Минимум 4 символа" }, { status: 400 })
        }

        if (isNickTaken && (isNickTaken.id !== userId)) {
            return NextResponse.json({ message: "Имя уже занято. Попробуйте другое" }, { status: 400 })
        }


        const updatedProfile = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                userNick: newUserNick,
                name: newName,
                image: newAvatarUrl
            }
        })
        return NextResponse.json(updatedProfile, { status: 200 });


    } catch (error) {
        return NextResponse.json({ error });
    }
}
