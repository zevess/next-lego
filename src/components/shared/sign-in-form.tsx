"use client"
import React, { useState } from 'react'
import { Button, Input } from '../ui'
import { usePathname, useRouter } from 'next/navigation'
import { credentialsSignIn, credentialsSignUp } from '@/lib/actions'

interface Props {
    className?: string,
}

export const SignInForm: React.FC<Props> = ({ className }) => {

    const [error, setError] = useState<any>()

    const pathname = usePathname()
    const router = useRouter()

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const response = pathname == '/sign-in' ? await credentialsSignIn(formData) : await credentialsSignUp(formData);
            if (response.error) {
                setError(response.message)
            } else {
                router.push('/')
            }
        } catch (error) {
            setError("Ошибка при авторизации")
        }
    }

    return (
        <div className={className}>
            {error && <p className='text-red-500'>{error}</p>}
            <form
                className="space-y-4"
                onSubmit={handleFormSubmit}
            >
                <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                    autoComplete="email"
                />
                <Input
                    name="password"
                    placeholder="Пароль"
                    type="password"
                    required
                    autoComplete="current-password"
                />
                <Button className="w-full" type="submit">
                    {pathname == '/sign-in' ? 'Войти' : 'Зарегистрироваться'}
                </Button>
            </form>
        </div>
    )
}
