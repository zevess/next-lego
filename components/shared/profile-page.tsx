import { SetDataJSON } from "@/utils/types"
import { User } from "@prisma/client"
import { Avatar } from "../ui"
import { AvatarFallback, AvatarImage } from "../ui/avatar"
import { Typography } from "./typography"
import { SetsTable } from "./sets-table"
import { Check, Heart } from "lucide-react"


interface Props {
    className?: string,
    data: User
    isSameUser: boolean,
    userCollection: SetDataJSON[] | "",
    userWishes: SetDataJSON[] | ""
}

export const ProfilePage: React.FC<Props> = ({ className, data, isSameUser, userCollection, userWishes }) => {

    // const userCollections = getUserCollection(data.id);

    // console.log(userWishes);

    return (
        <div className={className}>
            <div className='w-full flex flex-col items-center'>
                <Avatar className='max-w-56 w-1/3 h-1/3 mb-3'>
                    {data.image && <AvatarImage src={data.image} alt="@shadcn" />}
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {data.name && <Typography variant={'h2'} text={data.name} />}
                {isSameUser && <p>Это вы!</p>}
            </div>

            <div className='flex flex-col items-center mt-5'>
                <div className='flex items-center mr-auto ml-2'>
                    <Check/>
                    <Typography variant='h4' text='В коллекции:' className='mr-auto ml-2' />
                </div>


                {userCollection && <SetsTable userWishes={userWishes} userCollection={userCollection} setsData={userCollection} />}
            </div>

            <div className='flex flex-col items-center mt-5'>
                <div className='flex items-center mr-auto ml-2'>
                    <Heart />
                    <Typography variant='h4' text='В желаемом:' className='mr-auto ml-2' />
                </div>
                {userWishes && <SetsTable userWishes={userWishes} userCollection={userCollection} setsData={userWishes} />}
            </div>
        </div>
    )
}
