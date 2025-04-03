import { Check, Heart } from 'lucide-react'
import React from 'react'
import { Typography } from './typography'
import { SetData } from '@/lib/types'
import { User } from '@prisma/client'
import { SetsTable } from './sets-table'

interface Props {
    className?: string,
    data: User,
    isSameUser: boolean,
    userCollection: SetData[] | "",
    userWishes: SetData[] | ""
}

export const UserSets: React.FC<Props> = ({ className, data, isSameUser, userCollection, userWishes }) => {
    return (
        <div className={className}>
            <div className='flex flex-col items-center mt-5'>
                <div className='flex items-center mr-auto ml-2'>
                    <Check />
                    <Typography variant='h4' text='В коллекции:' className='mr-auto ml-2' />
                </div>
                {userCollection && <SetsTable isSameUser={isSameUser} userWishes={userWishes} userCollection={userCollection} setsData={userCollection} userId={data.id} />}
            </div>

            <div className='flex flex-col items-center mt-5'>
                <div className='flex items-center mr-auto ml-2'>
                    <Heart />
                    <Typography variant='h4' text='В желаемом:' className='mr-auto ml-2' />
                </div>
                {userWishes && <SetsTable isSameUser={isSameUser} userWishes={userWishes} userCollection={userCollection} setsData={userWishes} userId={data.id} />}
            </div>
        </div>
    )
}
