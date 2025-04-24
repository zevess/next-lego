"use client"
import { User } from "@prisma/client"
import { Typography } from "./typography"
import { ShoppingBasketIcon } from "lucide-react"
import { useHover } from "@uidotdev/usehooks";
import { ProfileEdit } from "./profile-edit"
import { AlertExit } from "./alert-exit"
import { UserAvatar } from "./user-avatar"
import { ProductData, SetData, TabType } from "@/lib/types";
import { UserSets } from "./user-sets";
import { ProductsTable } from "./products-table";
import { ContentTabs } from "./content-tabs";


interface Props {
    className?: string,
    data: User
    isSameUser: boolean,
    userCollection: SetData[] | "",
    userWishes: SetData[] | "",
    products: ProductData[] | ""
}

export const ProfilePage: React.FC<Props> = ({ className, data, isSameUser, userCollection, userWishes, products }) => {

    const [ref, hovering] = useHover();

    const tabs: TabType[] = [
        {
            "Списки": <UserSets key={1} data={data} isSameUser={isSameUser} userCollection={userCollection} userWishes={userWishes} />
        },
        {
            "Товары":
                <div key={2} className='flex flex-col items-center mt-5'>
                    <div className='flex items-center mr-auto ml-2'>
                        <ShoppingBasketIcon />
                        <Typography variant='h4' text='Товары на маркетплейсе:' className='mr-auto ml-2' />
                    </div>
                    <ProductsTable products={products} />
                </div>
        },
    ]

    return (
        <div className={className}>
            <div className='w-full flex flex-col items-center'>
                {isSameUser && <AlertExit className="ml-auto" />}
                <UserAvatar variant="large" src={data.image} />
                <div ref={ref} className="flex items-center">
                    <div className="flex flex-col items-center">
                        <Typography className="" variant={'h2'} text={data.name ? data.name : ""} />
                        <Typography variant="h4" className="text-gray-600" text={"@" + data.userNick} />
                    </div>

                    {isSameUser && <ProfileEdit hovering={hovering} userData={data} />}

                </div>
                {isSameUser && <p>{"Это вы!"}</p>}
            </div>

            <ContentTabs tabs={tabs} />
        </div>
    )
}
