import { User } from '@prisma/client'
import React from 'react'
import { AlertDialog, Avatar, Button } from '../ui'
import { AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import Link from 'next/link'
import { AvatarFallback, AvatarImage } from '../ui/avatar'
import { Typography } from './typography'

interface Props {
    className?: string,
    users: User[],
    title: string,
}

export const UsersDialog: React.FC<Props> = ({ users, title }) => {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="ghost" className='rounded-full bg-gray-200 hover:bg-gray-300'>+{users.length - 6}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='max-h-[80%] flex flex-col'>
                <AlertDialogHeader className='flex-none'>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                </AlertDialogHeader>
                <div className='flex-grow overflow-y-auto'>
                    {users.map((user) => (

                        <Link key={user.id} href={`/profile/${user.userNick}`} className='flex items-center hover:bg-gray-300 transition-colors duration-300 rounded-xl py-2'>
                            <Avatar className='w-12 h-12 mx-6'>
                                <AvatarImage src={user.image ? user.image : ""} alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Typography variant='h4' text={user.name ? user.name : ""} />
                        </Link>
                    ))}
                </div>

                <AlertDialogFooter className='flex-none'>
                    <AlertDialogCancel>Закрыть</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
