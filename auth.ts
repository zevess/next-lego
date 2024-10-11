
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from '@auth/prisma-adapter'
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import prisma from "./prisma/prisma-client";
import { formLoginSchema, formRegisterSchema } from "./utils/form-schema";

import { z, ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"},
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET 
    })
    // Credentials({
    //   name: "Credentials",
    //   credentials:{ 
    //     email: {
    //       label: "email",
    //       type: "email",
    //     },
    //     nick:{
    //       label: "nick",
    //       type: "text"
    //     },
    //     name:{
    //       label: "name",
    //       type: "text",
    //     },
    //     password: { label: "password", type: "password" },
    //   },
    //   authorize: async (credentials) => {
        
    //     if (!credentials || !credentials.email || !credentials.password) {
    //       throw new Error("email пароль ник обязательны")
    //     }

    //     try {

    //       const user = await prisma.user.findFirst({
    //         where:{
    //           email: credentials.email
    //         }
    //       })

    //       if (!user) {
    //         const validatedCredentials = formRegisterSchema.parse(credentials);
    //         await prisma.user.create({
    //           data: {
    //             nick: validatedCredentials.nick,
    //             email: validatedCredentials.email,
    //             password: validatedCredentials.password,
    //             name: validatedCredentials.name
    //           }
    //         });
    //       }

    //       // const user = 

    //       return user;

    //     } catch (error) {
    //       if (error instanceof z.ZodError) {
    //         throw new Error(error.issues[0].message);
    //       } else if (error instanceof Error) {
    //         throw new Error(error.message);
    //       } else {
    //         throw new Error("Произошла ошибка при регистрации");
    //       }
    //     }
    //   }
    // })
  ],
})
