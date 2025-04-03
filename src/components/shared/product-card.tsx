import React from 'react'
import { Card, HoverCard } from '../ui'
import { cn } from '@/lib/utils'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

import { ProductData } from '@/lib/types'
import Link from 'next/link'

interface Props {
    className?: string
    product: ProductData
}

export const ProductCard: React.FC<Props> = ({ className, product }) => {
    return (
        <Card className={cn("flex flex-col justify-between w-[45%] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[400px] transition-transform hover:scale-105 hover:border-orange-400 ", className)}>
            <CardHeader className="flex-row justify-between p-2 space-y-0 sm:p-6">

                <div>
                    <CardTitle>{product.title}</CardTitle>
                    {/* <CardDescription>{data.set_num}</CardDescription> */}
                </div>
                {/* <span>{data.year}</span> */}

            </CardHeader>

            <CardContent className="grid p-1 sm:p-6">
                <Link href={`/marketplace/${product.id}`}>
                    <img src={product.images[0]} className="max-h-[247.32px] mx-auto" alt="" />
                </Link>
            </CardContent>

            <CardFooter className="flex flex-col justify-between sm:flex-row ">
                <span>{product.price} ₽</span>
                
                {/* <Link href={`/marketplace/${product.id}`} className='text-base font-extrabold'>
                    {product.title}
                </Link> */}

                <Link className="bg-black py-1 my-2 mx-auto text-white text-center rounded-lg w-5/6 dark:bg-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 sm:w-3/5 sm:mb-0" href={`/marketplace/${product.id}`}>Перейти</Link>



            </CardFooter>
        </Card>
    )
}
