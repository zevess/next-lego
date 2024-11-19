"use client"

import { SetDataJSON } from "@/utils/types"
import { User } from "@prisma/client"
import { AlertDialog, Avatar } from "../ui"
import { AvatarFallback, AvatarImage } from "../ui/avatar"
import { Typography } from "./typography"
import { SetsTable } from "./sets-table"
import { Check, Heart, PencilLine } from "lucide-react"
import { useHover } from "@uidotdev/usehooks";
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { AlertEdit } from "./alert-edit"
import { updateUserNick } from "@/app/actions"


interface Props {
    className?: string,
    data: User
    isSameUser: boolean,
    userCollection: SetDataJSON[] | "",
    userWishes: SetDataJSON[] | ""
}

export const ProfilePage: React.FC<Props> = ({ className, data, isSameUser, userCollection, userWishes }) => {

    const [ref, hovering] = useHover();

    // const updatedUserNick = updateUserNick(data.id, "zevess");
    // console.log(updateUserNick);

    return (
        <div className={className}>
            <div className='w-full flex flex-col items-center'>
                <Avatar className='max-w-56 w-1/3 h-1/3 mb-3'>
                    {data.image && <AvatarImage src={data.image} alt="@shadcn" />}
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div ref={ref} className="flex items-center">
                    <div className="flex flex-col items-center">
                        <Typography className="" variant={'h2'} text={data.name ? data.name : ""} />
                        <Typography variant="h4" className="text-gray-600" text={"@" + data.userNick} />
                    </div>

                    {isSameUser && <AlertEdit hovering={hovering} userData={data} />}

                </div>
                {isSameUser && <p>{"Это вы!"}</p>}

            </div>

            <div className='flex flex-col items-center mt-5'>
                <div className='flex items-center mr-auto ml-2'>
                    <Check />
                    <Typography variant='h4' text='В коллекции:' className='mr-auto ml-2' />
                </div>


                {userCollection && <SetsTable isSameUser={isSameUser} userWishes={userWishes} userCollection={userCollection} setsData={userCollection} />}
            </div>

            <div className='flex flex-col items-center mt-5'>
                <div className='flex items-center mr-auto ml-2'>
                    <Heart />
                    <Typography variant='h4' text='В желаемом:' className='mr-auto ml-2' />
                </div>
                {userWishes && <SetsTable isSameUser={isSameUser} userWishes={userWishes} userCollection={userCollection} setsData={userWishes} />}
            </div>
        </div>
    )
}
