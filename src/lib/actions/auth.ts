"use server"

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../auth";
import { schema } from "../schema";
import { prisma } from "../prisma/prisma";
import bcrypt from "bcrypt"


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

export const credentialsSignIn = async (formData: FormData) => {

    try {
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })

        if (res.error) {
            return { error: true, message: res.error };
        }

        return res;
    } catch (error) {
        console.log(error)
        return { error: true, message: "Неверный email или пароль" };
    }

}

export const credentialsSignUp = async (formData: FormData) => {
    try {
        const email = formData.get("email");
        const password = formData.get("password");

        if (password && String(password).length < 6) {
            return { error: true, message: "Пароль слишком короткий, минимум 6 символов" };
        }

        const validatedData = schema.parse({ email, password });

        const user = await prisma.user.findFirst({
            where: {
                email: validatedData.email,
            },
        });

        if (user) {
            return { error: true, message: "Пользователь уже существует" };
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
            email: formData.get("email"),
            password: formData.get("password"),
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