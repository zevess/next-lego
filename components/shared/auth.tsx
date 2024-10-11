'use client'
import { Logo } from '@/components/shared/logo'
import { Typography } from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { formRegisterSchema, FormRegisterValues } from '@/utils/form-schema'
import { useRouter } from 'next/navigation'
import React from 'react'
import { z } from 'zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { registerUser } from '@/app/actions'
import { FormRegister } from './form/form-register'
import { FormLogin } from './form/form-login'
import { ProviderAuth } from './provider-auth'

interface Props {
    className?: string
}

export const Auth: React.FC<Props> = ({ className }) => {

    const [isRegister, setIsRegister] = React.useState(false)

    return (
        <div className={className}>
            <Card className='mx-auto max-w-[560px]'>
                <CardHeader>
                    <Logo />
                    <Typography variant='h2' text={isRegister ? 'Регистрация' : 'Войти'} className='mx-auto' />
                    
                </CardHeader>

                <CardContent>

                    {/* {isRegister ? <FormRegister setIsRegister={setIsRegister} />
                        :
                        <FormLogin setIsRegister={setIsRegister} />
                    } */}
                    <ProviderAuth/>

                    
                </CardContent>

            </Card>
        </div>
    )
}
