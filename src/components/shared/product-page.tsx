import React from 'react'
import { ImageCarousel } from './image-carousel'
import { Product, User } from '@prisma/client'
import { Typography } from './typography'
import Link from 'next/link'
import { Avatar, Separator } from '../ui'
import { AvatarFallback, AvatarImage } from '../ui/avatar'

interface Props {
    className?: string,
    product: Product,
    user: User | null
}

export const ProductPage: React.FC<Props> = ({ className, product, user }) => {
    const images = [
        "https://i.ibb.co/KjcZsQW3/3836.jpg",
        "https://i.ibb.co/jvQ5rXsd/47727.jpg"
    ]



    return (
        <div className={'w-full flex flex-col items-center lg:flex-row lg:justify-around lg:items-start p-2 py-4 rounded-xl border bg-card text-card-foreground shadow'}>
            <div className='w-5/6 md:w-2/3 lg:w-1/3'>
                <Typography variant='h1' className='mb-4' text={product.title} />

                <div className="flex items-center gap-4 mt-4">
                    <Separator className="flex-1" />
                    <span className="text-muted-foreground">Добавил</span>
                    <Separator className="flex-1" />
                </div>

                {user && <div className=' bg-gray-100 p-3 rounded-md mt-2 dark:bg-neutral-100 hover:bg-gray-200 border-2 hover:dark:bg-neutral-200 hover:border-orange-400 hover:border-2'>
                    <Link href={`/profile/${user.userNick}`} className='flex items-center'>
                        <Avatar className='h-12 w-12 mx-1'>
                            <AvatarImage src={user.image ? user.image : ""} alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className='px-2 text-lg dark:text-black'>{user.name}</span>
                    </Link>
                </div>}

                <div className="flex items-center gap-4 mt-4">
                    <Separator className="flex-1" />
                    <span className="text-muted-foreground">Описание</span>
                    <Separator className="flex-1" />
                </div>

                <div className='bg-gray-100 p-3 rounded-md mt-2 dark:bg-neutral-100 border-2'>
                    <p className='dark:text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ea corporis autem tenetur in. Ab repudiandae blanditiis sit incidunt quos odio, quod laborum dolorum fugiat sapiente delectus vitae iure dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eveniet at saepe dolores deserunt dolorum voluptatem laboriosam voluptates porro ea, sunt fugiat asperiores consectetur maiores aliquid voluptatibus! Sunt, iusto provident? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis commodi adipisci id expedita laborum a eligendi molestiae tenetur doloribus magnam iusto neque sapiente voluptates necessitatibus, nulla ratione. Mollitia, animi voluptas! </p>
                </div>
            </div>


            {product.images.length > 1 && <ImageCarousel images={product.images} />}
        </div>
    )
}
