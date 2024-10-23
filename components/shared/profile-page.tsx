import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Typography } from './typography'
import { SetsTable } from './sets-table'
import { Heart } from 'lucide-react'
import { User } from '@prisma/client'
import { getUserCollection } from '@/app/actions'
import { SetData, SetDataJSON } from '@/utils/types'

interface Props {
    className?: string,
    data: User
    isSameUser: boolean,
    userCollection: SetDataJSON[] | ""
}

export const ProfilePage: React.FC<Props> = ({ className, data, isSameUser, userCollection }) => {
  
    const userCollections = getUserCollection(data.id);
    
    console.log(userCollections);

    return (
        <div className={className}>
            <div className='w-full flex flex-col items-center'>
                <Avatar className='max-w-56 w-1/3 h-1/3 mb-3'>
                    {data.image && <AvatarImage src={data.image} alt="@shadcn" />}
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {data.name && <Typography variant={'h2'} text={data.name} />}
                {isSameUser && <p>Это вы!</p>}
            </div>

            <div className='flex flex-col items-center mt-5'>
                <Typography variant='h4' text='В коллекции:' className='mr-auto ml-2' />
                {userCollection && <SetsTable setsData={userCollection}/>}
            </div>

            <div className='flex flex-col items-center mt-5'>
                <div className='flex items-center mr-auto ml-2'>
                    <Heart />

                    <Typography variant='h4' text='В желаемом:' className='' />
                </div>
                {/* <SetsTable /> */}
            </div>
        </div>
    )
}
