import { User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { UserAvatar } from './user-avatar'
import { UsersDialog } from './users-dialog'

interface Props {
    className?: string,
    variant: 'wish' | 'own'
    users: User[],
}

export const SetUsersList: React.FC<Props> = ({ className, users, variant }) => {
    return (
        <div className={className}>
            {users.length > 0 && (
                <div className='my-2'>
                    {variant == 'own' && <p>В <b>Коллекции</b> у пользователей:</p>}
                    {variant == 'wish' && <p>В <b>Желаниях</b> у пользователей:</p>}

                    <div className='w-full flex items-center'>
                        {users.slice(0, 5).map((user) => (
                            <Link key={user.id} href={`/profile/${user.userNick}`}>
                                <UserAvatar variant='small' src={user.image ? user.image : ""} />
                                {/* <Avatar className='w-6 h-6 mx-1'>
                                    <AvatarImage src={user.image ? user.image : ""} alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar> */}
                            </Link>
                        ))}
                        {users.length > 6 &&
                            <UsersDialog title={variant == 'own' ? 'В коллекции у пользователей: ' : 'В коллекции у пользователей'} users={users} />
                        }
                    </div>
                </div>
            )}
        </div>
    )
}
