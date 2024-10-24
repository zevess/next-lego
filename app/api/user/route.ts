import prisma from "@/prisma/prisma-client"
import { NextRequest, NextResponse } from "next/server";
// import { hash } from 'bcrypt'
// import z from 'zod' 
// import { userSchema } from "@/lib/form-schema";



// export async function POST(req: Request) {
//     try {
//         const body = await req.json();

//         const { email, name, password } = userSchema.parse(body);

//         const existingUser = await prisma.user.findFirst({
//             where: {
//                 email: email
//             }
//         })

//         if (existingUser) {
//             return NextResponse.json({ user: null, message: "Пользователь уже существует" })
//         }

//         const hashPassword = await hash(password, 10)

//         const newUser = await prisma.user.create({
//             data: {
//                 name: name,
//                 password: hashPassword,
//                 email: email
//             }
//         })

//         const { password: newUserPassword, ...rest} = newUser

//         return NextResponse.json({user: rest, message: "Пользователь создан"}, {status: 201})
//     } catch (error) {
//         return NextResponse.json({message: 'Ошибка'}, {status: 500})
//     }
// }

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
        return NextResponse.json({error: "ошибкаffff"}, {status: 500})
    }
}