'use client'

import { addSetToCollection, addSetToWishes, removeSetFromCollection, removeSetFromWishes } from "@/lib/actions"
import { SetDataJSON } from "@/lib/types"
import React, { SetStateAction } from "react"
import { Card, HoverCard } from "../ui"
import { cn } from "@/lib/utils"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { setAction } from "@/lib/functions"
import { HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { WishButton } from "./wish-button"
import { OwnButton } from "./own-button"

interface SetCardProps {
    className?: string
    data: SetDataJSON,
    userId: string | undefined,
    isUserOwnSet: boolean,
    isUserWishSet: boolean,
    isSameUser: boolean,
}


export const SetCard: React.FC<SetCardProps> = ({ className, data, userId, isUserOwnSet, isUserWishSet, isSameUser }) => {

    const [isOwn, setIsOwn] = React.useState(isUserOwnSet)
    const [isWish, setIsWish] = React.useState(isUserWishSet)

    const isOwnText = isOwn ? "Удалить из коллекции" : "Добавить в коллекцию"
    const isWishText = isWish ? "Удалить из желаний" : "Добавить в желания"

    const handleSetAction = (setDispatch: React.Dispatch<SetStateAction<boolean>>, dispatchValue: boolean, handleAction: (data: SetDataJSON, userId: string) => Promise<void>) => {
        if (userId) {
            setAction(userId, data, setDispatch, dispatchValue, handleAction)
        }
    }

    return (

        <Card className={cn("flex flex-col justify-between w-[45%] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[400px] transition-transform hover:scale-105 hover:border-orange-400 ", className)}>
            <CardHeader className="flex-row justify-between p-2 space-y-0 sm:p-6">
                <div>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.set_num}</CardDescription>
                </div>
                <span>{data.year}</span>

            </CardHeader>

            <CardContent className="grid p-1 sm:p-6">
                <Link href={`/set/${data.set_num}`}>
                    <img src={data.set_img_url} className="max-h-[247.32px] mx-auto" alt="" />
                </Link>
            </CardContent>

            <CardFooter className="flex flex-col justify-between sm:flex-row ">
                {(isSameUser) && <HoverCard>
                    <HoverCardTrigger>
                        <WishButton isOwn={isOwn} isWish={isWish} onClick={() => isWish ? handleSetAction(setIsWish, false, removeSetFromWishes) : handleSetAction(setIsWish, true, addSetToWishes)} />
                    </HoverCardTrigger>
                    <HoverCardContent className="flex items-center justify-between">
                        {isWishText}
                        <WishButton isOwn={isOwn} isWish={isWish} onClick={() => isWish ? handleSetAction(setIsWish, false, removeSetFromWishes) : handleSetAction(setIsWish, true, addSetToWishes)} />
                    </HoverCardContent>
                </HoverCard>}

                <Link className="bg-black py-1 mb-2 mx-auto text-white text-center rounded-lg dark:bg-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 sm:w-3/5 sm:mb-0" href={`/set/${data.set_num}`}>Перейти к набору</Link>

                {isSameUser && <HoverCard>
                    <HoverCardTrigger>
                        <OwnButton isOwn={isOwn} isWish={isWish} onClick={() => isOwn ? handleSetAction(setIsOwn, false, removeSetFromCollection) : handleSetAction(setIsOwn, true, addSetToCollection)} />
                    </HoverCardTrigger>
                    <HoverCardContent className="flex items-center justify-between">
                        {isOwnText}
                        <OwnButton isOwn={isOwn} isWish={isWish} onClick={() => isOwn ? handleSetAction(setIsOwn, false, removeSetFromCollection) : handleSetAction(setIsOwn, true, addSetToCollection)} />
                    </HoverCardContent>
                </HoverCard>}

            </CardFooter>
        </Card>
    )
}
