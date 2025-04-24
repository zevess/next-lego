"use client"
import React from 'react'
import { ImageCarousel } from './image-carousel'
import { User } from '@prisma/client'
import { Typography } from './typography'
import Link from 'next/link'
import { Separator } from '../ui'
import { UserAvatar } from './user-avatar'
import { ProductData, SetData } from '@/lib/types'
import { SetTag } from './set-tag'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Pencil } from 'lucide-react'
import { StyledLink } from './styled-link'
import { useAppStore } from '@/store/providers/store-provider'


interface Props {
    className?: string,
    product: ProductData,
    user: User | undefined
}

export const ProductPage: React.FC<Props> = ({ className, product, user }) => {

    const { userId } = useAppStore((state) => state)

    return (
        <div className={'w-full flex flex-col items-center lg:flex-row lg:justify-around lg:items-start p-2 py-4 rounded-xl border bg-card text-card-foreground shadow'}>
            <div className='w-5/6 md:w-2/3 lg:w-1/3'>
                <div className='flex items-center'>
                    {userId === product.userId && (
                        <StyledLink className='mr-3' href={`/marketplace/${product.id}/edit`}>
                            <Pencil />
                        </StyledLink>
                    )}

                    <Typography variant='h1' className='mt-4 mb-4' text={product.title} />
                </div>

                <Typography variant='h3' className='mb-4' text={product.price + ' ₽'} />

                <p className='text-gray-500'>Добавлено: {product.createdAt?.toLocaleString()}</p>
                <p className='text-gray-500'>Изменено: {product.updatedAt?.toLocaleString()}</p>

                
                <div className="flex items-center gap-4 mt-4">
                    <Separator className="flex-1" />
                    <span className="text-muted-foreground">Добавил</span>
                    <Separator className="flex-1" />
                </div>

                {user && <div className=' bg-gray-100 p-3 rounded-md mt-2 dark:bg-transparent hover:bg-gray-200 border-2  hover:border-orange-400 hover:border-2'>
                    <Link href={`/profile/${user.userNick}`} className='flex items-center'>
                        <UserAvatar variant='medium' src={user.image} />
                        <span className='px-2 text-lg dark:text-[rgba(242,242,242,0.9)]'>{user.name}</span>
                    </Link>
                </div>}

                <div className="flex items-center gap-4 mt-4">
                    <Separator className="flex-1" />
                    <span className="text-muted-foreground">Описание</span>
                    <Separator className="flex-1" />
                </div>

                <div className='bg-gray-100 p-3 rounded-md mt-2 dark:bg-transparent border-2'>
                    <p className='dark:text-[rgba(242,242,242,0.9)]'>{product.description}</p>
                </div>

                <div className="flex items-center gap-4 my-4">
                    <Separator className="flex-1" />
                    <span className="text-muted-foreground">Связанные наборы</span>
                    <Separator className="flex-1" />
                </div>

                <div className='flex'>
                    {product.sets.map((set) => (
                        <SetTag isLink key={set.set_num} set={set} />
                    ))}
                </div>


            </div>


            {product.images.length > 0 && <ImageCarousel images={product.images} />}
        </div>
    )
}
