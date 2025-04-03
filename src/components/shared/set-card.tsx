'use client'


import React, { SetStateAction } from "react"
import { Card, HoverCard } from "../ui"
import { cn } from "@/lib/utils"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { handleAddSetToCollection, handleAddSetToWishes, setAction } from "@/lib/functions"
import { HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { WishButton } from "./wish-button"
import { OwnButton } from "./own-button"
import { SetData } from "@/lib/types"
import { addSetToCollection, addSetToWishes } from "@/lib/actions/set"



interface SetCardProps {
    className?: string
    data: SetData,
    userId: string,
    isUserOwnSet: boolean,
    isUserWishSet: boolean,
    isSameUser: boolean,
}


export const SetCard: React.FC<SetCardProps> = ({ className, data, userId, isUserOwnSet, isUserWishSet, isSameUser }) => {

    const [isOwn, setIsOwn] = React.useState(isUserOwnSet)
    const [isWish, setIsWish] = React.useState(isUserWishSet)

    const isOwnText = isOwn ? "Удалить из коллекции" : "Добавить в коллекцию"
    const isWishText = isWish ? "Удалить из желаний" : "Добавить в желания"

    return (

        <Card className={cn("flex flex-col justify-between w-[45%] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[400px] transition-transform hover:scale-105 hover:border-orange-400 ", className)}>
            <CardHeader className="flex-row justify-between p-2 space-y-0 sm:p-6">
                <div>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.set_num}</CardDescription>
                </div>
                <span>{data.year}</span>

            </CardHeader>

            <CardContent className="grid p-1 sm:p-3">
                <Link href={`/set/${data.set_num}`}>
                    <img src={data.set_img_url} className="max-h-[247.32px] mx-auto" alt="" />
                </Link>
            </CardContent>

            <CardFooter className="flex flex-col justify-between sm:flex-row p-2 md:p-3 lg:pb-6 lg:px-6">
                <div className="hidden md:block">
                    {(isSameUser) && <HoverCard>
                        <HoverCardTrigger>
                            <WishButton isOwn={isOwn} isWish={isWish} onClick={() => handleAddSetToWishes(data, userId, setIsWish, isWish, addSetToWishes)} />
                        </HoverCardTrigger>
                        <HoverCardContent className="flex items-center justify-between">
                            {isWishText}
                            <WishButton isOwn={isOwn} isWish={isWish} onClick={() => handleAddSetToWishes(data, userId, setIsWish, isWish, addSetToWishes)} />
                        </HoverCardContent>
                    </HoverCard>}
                </div>


                <Link className="bg-black py-1 mb-2 mx-auto w-11/12 text-white text-center rounded-lg dark:bg-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 sm:w-5/6 sm:mb-0 lg:w-3/6" href={`/set/${data.set_num}`}>Перейти к набору</Link>

                <div className="hidden md:block">
                    {isSameUser && <HoverCard>
                        <HoverCardTrigger>
                            <OwnButton isOwn={isOwn} isWish={isWish} onClick={() => handleAddSetToCollection(data, userId, setIsOwn, isOwn, addSetToCollection)} />
                        </HoverCardTrigger>
                        <HoverCardContent className="flex items-center justify-between">
                            {isOwnText}
                            <OwnButton isOwn={isOwn} isWish={isWish} onClick={() => handleAddSetToCollection(data, userId, setIsOwn, isOwn, addSetToCollection)} />
                        </HoverCardContent>
                    </HoverCard>}
                </div>

            </CardFooter>
        </Card>
    )
}
