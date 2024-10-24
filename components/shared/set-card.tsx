'use client'

import { BellRing, Check, Heart } from "lucide-react"

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
import { addSetToCollection } from "@/app/actions"
import { useSession } from "next-auth/react"


interface SetCardProps {
    className?: string
    data: SetDataJSON,
    userId: string | null
}


export const SetCard: React.FC<SetCardProps> = ({ className, data, userId }) => {


    const handleClick = () => {
        try {
            if (userId) {
                addSetToCollection(data, userId);
            }
        } catch (error) {
            console.error(error);
        }
    };

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
            <CardFooter className="flex flex-col sm:flex-row ">
                {userId && <Button onClick={handleClick} variant={'ghost'} className="">
                    {/* <Heart fill="red" strokeWidth={1} /> */}
                    <Heart />
                </Button>}

                <Link className="bg-black py-1 mb-2 text-white text-center rounded-lg dark:bg-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 sm:w-3/5 sm:mb-0" href={`/set/${data.set_num}`}>Перейти к набору</Link>
                
                {userId && <Checkbox onClick={handleClick} className="h-6 w-6 mx-4" />}
                
            </CardFooter>
        </Card>
    )
}
