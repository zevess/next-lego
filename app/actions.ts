// 'use server'

// import prisma from "@/prisma/prisma-client";
// import { Prisma } from "@prisma/client";
// import { hashSync } from 'bcrypt';


// export async function registerUser(body: Prisma.UserCreateInput) {
//     try {
//         const user = await prisma.user.findFirst({
//             where: {
//                 email: body.email
//             }
//         })

//         if (user) {
//             throw new Error('Пользователь уже существует!')
//         }

//         const newUser = await prisma.user.create({
//             data: {
//                 name: body.name,
//                 nick: body.nick,
//                 email: body.email,
//                 password: hashSync(body.password, 10)
//             }
//         })
        
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }

// }