import { cn } from "@/lib/utils"
import { Card, Skeleton } from "../ui"
import { CardContent, CardFooter, CardHeader } from "../ui/card"

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
            </CardFooter>
        </Card>


    )
}
