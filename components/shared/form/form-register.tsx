import { registerUser } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formRegisterSchema, FormRegisterValues } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
    className?: string,
    setIsRegister: Dispatch<SetStateAction<boolean>> 
}

export const FormRegister: React.FC<Props> = ({ className, setIsRegister }) => {

    const router = useRouter()

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormRegisterValues>({
        resolver: zodResolver(formRegisterSchema)
    })

    const onSubmit: SubmitHandler<FormRegisterValues> = async (data) => {
        try {
            await registerUser({
                email: data.email,
                name: data.name,
                nick: data.nick,
                password: data.password
            }).then(
                () => router.push('/')
            )

        } catch (err) {
            if (err) {
                setError("email", {
                    message: 'Пользователь уже существует!'
                })
            } else {
                setError("root", {
                    message: 'Ошибка при регистрации'
                })
            }
        }
    }



    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">

                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Имя</Label>
                    <Input {...register('name')} id="name" placeholder="Введите имя" />
                    {errors.name && (
                        <div className='text-red-500'>{errors.name.message}</div>
                    )}
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="nick">Введите никнейм</Label>
                    <Input {...register('nick')} id="nick" placeholder="Вас можно будет найти как @example" />
                    {errors.nick && (
                        <div className='text-red-500'>{errors.nick.message}</div>
                    )}
                </div>

                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Почта</Label>
                    <Input {...register('email')} id="email" placeholder="Введите почту" />
                    {errors.email && (
                        <div className='text-red-500'>{errors.email.message}</div>
                    )}
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Пароль</Label>
                    <Input type='password' {...register('password')} id="password" placeholder="Введите пароль" />
                    {errors.password && (
                        <div className='text-red-500'>{errors.password.message}</div>
                    )}
                </div>

                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="confirmPassword">Повторите пароль</Label>
                    <Input type='password' {...register('confirmPassword')} id="confirmPassword" placeholder="Повторите пароль" />
                    {errors.confirmPassword && (
                        <div className='text-red-500'>{errors.confirmPassword.message}</div>
                    )}
                </div>

                <div className='flex justify-between'>
                    <Button type='submit' disabled={isSubmitting}>
                        Создать
                    </Button>
                    <Button onClick={() => setIsRegister(false)}>
                        Есть аккаунт?
                    </Button>
                </div>
                {errors.root && (
                    <div className='text-red-500'>{errors.root.message}</div>
                )}
            </div>
        </form>
    )
}
