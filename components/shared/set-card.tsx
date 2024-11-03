'use client'

import { BellRing, Check, Heart, Plus, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Checkbox } from "../ui/checkbox"
import React, { Suspense } from "react"
import { SetDataJSON } from "@/utils/types"
import { SetCardSkeleton } from "./set-card-skeleton"
import { addSetToCollection, addSetToWishes, removeSetFromCollection, removeSetFromWishes } from "@/app/actions"
import { useSession } from "next-auth/react"


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


    const handleAddSetToCollection = () => {
        try {
            if (userId) {
                addSetToCollection(data, userId).then(()=> setIsOwn(true));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveSetFromCollection = () =>{
        try {
            if (userId){
                removeSetFromCollection(data, userId).then(() => setIsOwn(false))
            }
        } catch (error) {
            console.error(error)
        }
    
    }


    const handleAddSetToWishes = () => {
        try {
            if (userId) {
                addSetToWishes(data, userId).then(()=> setIsWish(true));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveSetFromWishes = () =>{
        try {
            if (userId){
                removeSetFromWishes(data, userId).then(() => setIsWish(false))
            }
        } catch (error) {
            console.error(error)
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
                {userId && <Button disabled={isOwn} onClick={ isWish ? handleRemoveSetFromWishes : handleAddSetToWishes} variant={'ghost'} className="">
                    
                    {isWish ? <Heart fill="red" strokeWidth={1} /> : <Heart /> }
                    
                </Button>}

                <Link className="bg-black py-1 mb-2 text-white text-center rounded-lg dark:bg-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 sm:w-3/5 sm:mb-0" href={`/set/${data.set_num}`}>Перейти к набору</Link>
                
                {/* {userId && <Checkbox onClick={handleClick} className="h-6 w-6 mx-4" />} */}
                
                {userId && <Button disabled={isWish} onClick={ isOwn ? handleRemoveSetFromCollection : handleAddSetToCollection} variant={'ghost'} className="">
                    {isOwn ? <X/> : <Plus/> }    
                </Button>}

            </CardFooter>
        </Card>
    )
}
