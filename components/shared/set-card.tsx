'use client'

import { addSetToCollection, addSetToWishes, removeSetFromCollection, removeSetFromWishes } from "@/app/actions"
import { SetDataJSON } from "@/utils/types"
import React, { SetStateAction } from "react"
import { Button, Card } from "../ui"
import { cn } from "@/lib/utils"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Heart, Plus, X } from "lucide-react"
import Link from "next/link"
import { setAction } from "@/utils/functions"




interface SetCardProps {
    className?: string
    data: SetDataJSON,
    userId: string | null,
    isUserOwnSet: boolean,
    isUserWishSet: boolean
}


export const SetCard: React.FC<SetCardProps> = ({ className, data, userId, isUserOwnSet, isUserWishSet }) => {

    const [isOwn, setIsOwn] = React.useState(isUserOwnSet)
    const [isWish, setIsWish] = React.useState(isUserWishSet)


    const handleSetAction = (setDispatch: React.Dispatch<SetStateAction<boolean>>, dispatchValue: boolean, handleAction:(data: SetDataJSON, userId: string) => Promise<void>) =>{
        if (userId) {
            setAction(userId, data, setDispatch, dispatchValue, handleAction)
        }
    }


    return (

        <Card className={cn("flex flex-col justify-between w-[45%] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[400px]", className)}>
            <CardHeader className="flex-row justify-between p-2 space-y-0 sm:p-6">
                <div>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.set_num}</CardDescription>
                </div>
                <span>{data.year}</span>

            </CardHeader>
            <CardContent className="grid p-1 sm:p-6">
                <img src={data.set_img_url} alt="" />
            </CardContent>
            <CardFooter className="flex flex-col justify-between sm:flex-row ">
                {userId && <Button disabled={isOwn} onClick={ ()=> isWish ? handleSetAction(setIsWish, false, removeSetFromWishes) : handleSetAction(setIsWish, true, addSetToWishes)} variant={'ghost'} className="">
                    
                    {isWish ? <Heart fill="red" strokeWidth={1} /> : <Heart /> }
                    
                </Button>}

                <Link className="bg-black py-1 mb-2 text-white text-center rounded-lg dark:bg-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 sm:w-3/5 sm:mb-0" href={`/set/${data.set_num}`}>Перейти к набору</Link>


                {userId && <Button disabled={isWish} onClick={() => isOwn ? handleSetAction(setIsOwn,false, removeSetFromCollection) : handleSetAction(setIsOwn, true, addSetToCollection)} variant={'ghost'} className="">
                    {isOwn ? <X /> : <Plus />}
                </Button>}

            </CardFooter>
        </Card>
    )
}
