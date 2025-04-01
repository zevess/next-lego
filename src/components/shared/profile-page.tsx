"use client"

import { User } from "@prisma/client"
import { Typography } from "./typography"
import { Check, Heart } from "lucide-react"
import { useHover } from "@uidotdev/usehooks";
import { ProfileEdit } from "./profile-edit"
import { AlertExit } from "./alert-exit"

import { SetsTable } from "./sets-table"
import { UserAvatar } from "./user-avatar"
import { SetData } from "@/lib/types";



interface Props {
    className?: string,
    data: User
    isSameUser: boolean,
    userCollection: SetData[] | "",
    userWishes: SetData[] | ""
}

export const ProfilePage: React.FC<Props> = ({ className, data, isSameUser, userCollection, userWishes }) => {

    const [ref, hovering] = useHover();

    return (
        <div className={className}>
            <div className='w-full flex flex-col items-center'>
                {isSameUser && <AlertExit className="ml-auto"/>}
                <UserAvatar variant="large" src={data.image}/>
                <div ref={ref} className="flex items-center">
                    <div className="flex flex-col items-center">
                        <Typography className="" variant={'h2'} text={data.name ? data.name : ""} />
                        <Typography variant="h4" className="text-gray-600" text={"@" + data.userNick} />
                    </div>

                    {isSameUser && <ProfileEdit hovering={hovering} userData={data} />}

                </div>
                {isSameUser && <p>{"Это вы!"}</p>}
            </div>

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
                {userWishes && <SetsTable isSameUser={isSameUser} userWishes={userWishes} userCollection={userCollection} setsData={userWishes} userId={data.id}/>}
            </div>
        </div>
    )
}
