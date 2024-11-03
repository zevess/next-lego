'use client'
import React from 'react'
import { SetCard } from './set-card'
import { constants } from '@/constants'
import { Button } from '../ui/button'
import { getDataTest, getSets } from '@/app/actions'
import { MultipleSetsDataJSON, SetData, SetDataJSON } from '@/utils/types'
import { SetCardSkeleton } from './set-card-skeleton'
import { useSets } from '@/hooks/use-sets'
import { auth } from '@/auth'
import { useSession } from 'next-auth/react'


interface Props {
  className?: string,
  searchQuery?: string,
  setsData: SetDataJSON[],
  isLoading?: boolean,
  userCollection: SetDataJSON[] | "",
  userWishes: SetDataJSON[] | ""
}

export const SetsTable: React.FC<Props> = ({ className, searchQuery, setsData, isLoading, userCollection, userWishes }) => {

  // const [expanded, setExpanded] = React.useState(false)
  // const cardsArr = expanded ? constants : constants.slice(0, 3);

  const { data: session } = useSession()

  // console.log(session)

  const userCollectionItemsIds = userCollection && userCollection?.map((item) => item.set_num);
  const userWishesItemsIds = userWishes && userWishes?.map((item) => item.set_num);

  // console.log(setsData)

  return (
    <>

      {/* <div className="w-full text-2xl flex items-center text-gray-400 mt-10">
        <div className='flex-1 p-0.5 bg-gray-200 m-1 dark:bg-gray-500'></div>
        <span>Результаты</span>
        <div className='flex-1 p-0.5 bg-gray-200 m-1 dark:bg-gray-500'></div>
      </div> */}

      <div className='flex flex-col items-center'>
        <div className='flex flex-wrap justify-evenly mt-8 gap-2 sm:gap-8'>

          {isLoading && <>
            <SetCardSkeleton />
            <SetCardSkeleton />
            <SetCardSkeleton />
            <SetCardSkeleton />
            <SetCardSkeleton />
          </>
          }

          {setsData && setsData.map((item) => (
            <SetCard isUserWishSet={userWishesItemsIds.includes(item.set_num)} isUserOwnSet={userCollectionItemsIds?.includes(item.set_num)} userId={session?.user?.id ? session?.user?.id : null} key={item.set_num} data={item} />
          ))}
        </div>
        {/* <Button className='mt-10' onClick={() => setExpanded(!expanded)}>{expanded ? 'Скрыть ' : 'Показать все '}</Button> */}
      </div>
    </>

  )
}
