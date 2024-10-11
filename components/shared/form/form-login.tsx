import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formLoginSchema, FormLoginValues, FormRegisterValues } from '@/utils/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import React, { Dispatch, SetStateAction } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
    className?: string,
    setIsRegister: Dispatch<SetStateAction<boolean>>

}

export const FormLogin: React.FC<Props> = ({ className, setIsRegister }) => {

    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormLoginValues>({
        resolver: zodResolver(formLoginSchema)
    })

    const onSubmit: SubmitHandler<FormLoginValues> = async (data) => {
        try {
            await signIn("credentials", data)

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">

                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Почта</Label>
                    <Input {...register('email')} id="email" placeholder="Введите почту" />
                    {errors.email && (
                        <div className="text-red-500">{errors.email.message}</div>
                    )}
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Пароль</Label>
                    <Input {...register('password')} id="password" placeholder="Введите пароль" />
                    {errors.password && (
                        <div className="text-red-500">{errors.password.message}</div>
                    )}
                </div>

                <div className='flex justify-between'>
                    <Button type='submit' disabled={isSubmitting}>
                        Войти
                    </Button>
                    <Button onClick={() => setIsRegister(true)}>
                        Нет аккаунта?
                    </Button>
                </div>
                {errors.root && (
                    <div className='text-red-500'>{errors.root.message}</div>
                )}
            </div>
        </form>
    )
}
