'use client'
import React from 'react'

import { useSession } from 'next-auth/react'
import { SetDataJSON } from '@/utils/types'
import { SetCardSkeleton } from './set-card-skeleton'
import { SetCard } from './set-card'


interface Props {
  className?: string,
  searchQuery?: string,
  setsData: SetDataJSON[],
  isLoading?: boolean,
  userCollection: SetDataJSON[] | "",
  userWishes: SetDataJSON[] | ""
}

export const SetsTable: React.FC<Props> = ({ className, searchQuery, setsData, isLoading, userCollection, userWishes }) => {

  const { data: session } = useSession()

  const userCollectionItemsIds = userCollection && userCollection?.map((item) => item.set_num);
  const userWishesItemsIds = userWishes && userWishes?.map((item) => item.set_num);

  return (
    <>


      <div className='flex flex-col items-center mb-4'>
        <div className='flex flex-wrap flex-grow-0 items-start justify-evenly mt-8 gap-2 sm:gap-8'>

          {isLoading && <>
            <SetCardSkeleton />
            <SetCardSkeleton />
            <SetCardSkeleton />
            <SetCardSkeleton />
            <SetCardSkeleton />
          </>
          }

          {!setsData && <p>Ничего не найдено</p>}

          {setsData && setsData.map((item) => (
            <SetCard isUserWishSet={userWishesItemsIds.includes(item.set_num)} isUserOwnSet={userCollectionItemsIds?.includes(item.set_num)} userId={session?.user?.id ? session?.user?.id : null} key={item.set_num} data={item} />
          ))}
        </div>
        
      </div>
    </>

  )
}
