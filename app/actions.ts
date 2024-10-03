'use server'

// import { userSchema } from "@/lib/form-schema";
import prisma from "@/prisma/prisma-client";
import { Prisma } from "@prisma/client";
import { hashSync } from 'bcrypt';
import { NextResponse } from "next/server";

export async function registerUser(body: Prisma.UserCreateInput) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })

        if (user) {
            throw new Error('Пользователь уже существует!')
        }

        const newUser = await prisma.user.create({
            data: {
                name: body.name,
                nick: body.nick,
                email: body.email,
                password: hashSync(body.password, 10)
            }
        })
    } catch (error) {
        console.log(error);
        throw error;
    }

    // try {
    //     const { email, name, password } = userSchema.parse(body);

    //     const existingUser = await prisma.user.findFirst({
    //         where: {
    //             email: email
    //         }
    //     })

    //     if (existingUser) {
    //         return NextResponse.json({ user: null, message: "Пользователь уже существует" })
    //     }

    //     const hashPassword = await hash(password, 10)

    //     const newUser = await prisma.user.create({
    //         data: {
    //             name: name,
    //             password: hashPassword,
    //             email: email
    //         }
    //     })

    //     const { password: newUserPassword, ...rest} = newUser

    //     return NextResponse.json({user: rest, message: "Пользователь создан"}, {status: 201})
    // } catch (error) {
    //     return NextResponse.json({message: 'Ошибка'}, {status: 500})
    // }

}