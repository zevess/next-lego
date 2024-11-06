import prisma from "@/prisma/prisma-client"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        
        const userId = req.nextUrl.searchParams.get("userId")?.toString()
        
        const user = await prisma.user.findFirst({
            where:{
                id: userId
            }
        })

        if (user){
            return NextResponse.json(user)
        } 
        else{
            return NextResponse.json({error: "Пользователь не найден"}, {status: 500})
        }

    } catch (error) {
        return NextResponse.json({error: "ошибка"}, {status: 500})
    }
}