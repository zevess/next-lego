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
import React from "react"


type CardProps = React.ComponentProps<typeof Card>

interface SetCardProps{
    className?: string
    title: string,
    id: string,
    year: number,
    img: string
}

//w-[260px] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[400px]


export const SetCard : React.FC<SetCardProps> = ({title, id, year, img, className}) => {
    return (
        <Card className={cn("flex flex-col justify-between w-[45%] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[400px]", className)}>
            <CardHeader className="flex-row justify-between p-2 space-y-0 sm:p-6">
                <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{id}</CardDescription>
                </div>
                <span>{year}</span>

            </CardHeader>
            <CardContent className="grid p-1 sm:p-6">
                <img src={img} alt="" />
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row ">
                <Button variant={'ghost'} className="">
                    <Heart fill="red" strokeWidth={1} />
                </Button>
                <Link className="bg-black py-1 mb-2 text-white text-center rounded-lg dark:bg-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 sm:w-3/5 sm:mb-0" href={'/set/3'}>Перейти к набору</Link>
                <Checkbox className="h-6 w-6 mx-4" />
            </CardFooter>
        </Card>
    )
}
