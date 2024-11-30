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

    return (
        <div className={className}>
            <Card className='mx-auto max-w-[560px]'>
                <CardHeader>
                    <Logo />
                    <Typography variant='h2' text={'Войти'} className='mx-auto' />
                    
                </CardHeader>

                <CardContent>
                    <ProviderAuth/>                    
                </CardContent>
            </Card>
        </div>
    )
}
