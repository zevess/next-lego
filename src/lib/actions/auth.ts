"use server"

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../auth";

import { prisma } from "../prisma/prisma";
import bcrypt from "bcrypt"
import { FormSchema, formSchema } from "../schema";


export const providerLogin = async (provider: string) => {
    await signIn(provider, {
        redirectTo: '/'
    });
    revalidatePath("/");
}

export const logout = async () => {
    await signOut({
        redirectTo: '/'
    });
    revalidatePath("/")
}

export const credentialsSignIn = async (data: FormSchema) => {
    try {
        const validatedCredentials = formSchema.parse(data);

        const user = await prisma.user.findFirst({
            where: {
                email: validatedCredentials.email.toLocaleLowerCase(),
            },
        });

        const match = user?.password && await bcrypt.compare(validatedCredentials.password, user?.password)

        if (user && !match) {
            return { error: 401, type: 'password', message: "Неверный пароль" }
        }

        if (!user) {
            return { error: 401, type: 'email', message: "Неверный email или пароль" }
        }

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })

        // if (res.error) {
        //     return { error: true, message: res.error };
        // }

        return res;
    } catch (error) {
        console.log(error)
        return { error: true, message: "Неверный email или пароль" };
    }

}

export const credentialsSignUp = async (data: FormSchema) => {
    try {
        const email = data.email;
        const password = data.password;

        if (password && String(password).length < 6) {
            return { error: true, message: "Пароль слишком короткий, минимум 6 символов" };
        }

        const validatedData = formSchema.parse({ email, password });

        const user = await prisma.user.findFirst({
            where: {
                email: validatedData.email,
            },
        });

        if (user) {
            return { error: true, type: 'email', message: "Пользователь уже существует" };
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(validatedData.password, salt);

        await prisma.user.create({
            data: {
                email: validatedData.email.toLocaleLowerCase(),
                password: hash,
            },
        });

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        });

        if (res.error) {
            return { error: true, message: res.error };
        }

        return res;
    } catch (error) {
        console.log(error)
        return { error: true, message: "Произошла непредвиденная ошибка при регистрации" };
    }
};