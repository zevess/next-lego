'use client'

import React from "react"
import { Card } from "../ui"
import { CardContent, CardHeader } from "../ui/card"
import { Logo } from "./logo"
import { Typography } from "./typography"
import { ProviderAuth } from "./provider-auth"


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
