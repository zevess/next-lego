"use client"
import React from 'react'
import { Button, Input } from '../ui'
import { usePathname, useRouter } from 'next/navigation'
import { credentialsSignIn, credentialsSignUp } from '@/lib/actions/auth'
import {  SubmitHandler, useForm } from 'react-hook-form'
import { formSchema, FormSchema } from '@/lib/schemas/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'


interface Props {
    className?: string,
}

export const SignInForm: React.FC<Props> = ({ className }) => {

    const pathname = usePathname()
    const router = useRouter()

    const { register, handleSubmit, setError, formState: { errors, isDirty, isSubmitting } } = useForm<FormSchema>({ resolver: zodResolver(formSchema) })

    const onSubmit: SubmitHandler<FormSchema> = async (data) => {
        console.log(data)
        try {
            const response = pathname == '/sign-in' ? await credentialsSignIn(data) : await credentialsSignUp(data);
            if (response.error) {
                setError(response.type, { message: response.message })
            } else {
                router.push('/')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={className}>
            <form
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <Input {...register('email', { required: true })}
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                        autoComplete="email"
                    />
                    {errors.email && (
                        <span className='text-red-500'>{errors.email.message}</span>
                    )}
                </div>

                <div>
                    <Input {...register('password', { required: true })}
                        name="password"
                        placeholder="Пароль"
                        type="password"
                        required
                        autoComplete="current-password"
                    />
                    {errors.password && (
                        <span className='text-red-500'>{errors.password.message}</span>
                    )}
                </div>

                <Button className="w-full" type="submit" disabled={!isDirty || isSubmitting}>
                    {pathname == '/sign-in' ? 'Войти' : 'Зарегистрироваться'}
                </Button>
            </form>
        </div>
    )
}
