"use client"
import React from 'react'
import { Typography } from './typography'
import { StyledButton } from './styled-button'
import Link from 'next/link'

interface Props {
    className?: string
}

export const MarketplacePage: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Typography variant="h1" text={'Маркетплейс'} className="flex justify-center" />
            <StyledButton>
                <Link href={'/marketplace/create'}>
                    Добавить товар
                </Link>
            </StyledButton>
        </div>
    )
}
