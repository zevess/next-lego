'use client'
import { Logo } from '@/components/shared/logo'
import { Typography } from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formRegisterSchema, FormRegisterValues } from '@/lib/form-schema'
import { useRouter } from 'next/navigation'
import React from 'react'
import { z } from 'zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerUser } from '@/app/actions'
import { FormRegister } from './form/form-register'

interface Props {
    className?: string
}

export const Auth: React.FC<Props> = ({ className }) => {

    const [isRegistration, setIsRegistration] = React.useState(false)
    
    return (
        <div className={className}>
            <Card className='mx-auto max-w-[560px]'>
                <CardHeader>
                    <Logo />
                    <Typography variant='h2' text={isRegistration ? 'Регистрация' : 'Войти'} className='mx-auto' />
                    <Typography variant='h2' text={`${isRegistration}`} className='mx-auto' />
                </CardHeader>

                <CardContent>

                    {isRegistration ? <FormRegister setIsRegister={setIsRegistration}/>
                        :
                        <form action="">
                            <div className="grid w-full items-center gap-4">


                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Почта</Label>
                                    <Input id="email" placeholder="Введите почту" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Пароль</Label>
                                    <Input id="password" placeholder="Введите пароль" />
                                </div>

                                <div className='flex justify-between'>
                                    <Button>
                                        Войти
                                    </Button>
                                    <Button onClick={() => setIsRegistration(true)}>
                                        Нет аккаунта?
                                    </Button>
                                </div>

                            </div>
                        </form>
                    }



                </CardContent>


            </Card>
        </div>
    )
}
