"use client"
import React from 'react'
import { Typography } from './typography'
import { StyledButton } from './styled-button'
import Link from 'next/link'
import { ProductsTable } from './products-table'
import { ProductData } from '@/lib/types'

interface Props {
    className?: string,
    products: ProductData[]
}

export const MarketplacePage: React.FC<Props> = ({ className, products }) => {
    return (
        <div className={className}>
            <Typography variant="h1" text={'Маркетплейс'} className="flex justify-center" />
            <StyledButton>
                <Link href={'/marketplace/create'}>
                    Добавить товар
                </Link>
            </StyledButton>
            <ProductsTable products={products} />
        </div>
    )
}
