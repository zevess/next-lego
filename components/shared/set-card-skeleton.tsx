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
import { Skeleton } from "../ui/skeleton"




interface SetCardProps {
    className?: string

}


export const SetCardSkeleton: React.FC<SetCardProps> = ({ className }) => {
    return (

        <Card className={cn("flex flex-col justify-between w-[45%] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[400px]", className)}>
            <CardHeader className="flex-row justify-between p-2 space-y-0 sm:p-6">
                <div className="w-full">
                    <Skeleton className="w-4/6 h-5" />
                    <Skeleton className="w-2/5 h-5 mt-1 " />
                    
                </div>
                

            </CardHeader>
            <CardContent className="grid p-1 sm:p-6">
               
                <Skeleton className="aspect-[348/260]" />
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row ">
                <Skeleton />
                {/* <Button variant={'ghost'} className="">
                    <Heart fill="red" strokeWidth={1} />
                </Button>
                <Link className="bg-black py-1 mb-2 text-white text-center rounded-lg dark:bg-white dark:text-black hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300 sm:w-3/5 sm:mb-0" href={`/set/${data.set_num}`}>Перейти к набору</Link>
                <Checkbox className="h-6 w-6 mx-4" /> */}
            </CardFooter>
        </Card>


    )
}
