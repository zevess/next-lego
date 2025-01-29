'use client'
import React from 'react'
import { SetDataJSON } from '@/lib/types'
import { SetCardSkeleton } from './set-card-skeleton'
import { SetCard } from './set-card'
import { NotFound } from './not-found'
import { usePathname } from 'next/navigation'


interface Props {
  className?: string,
  searchQuery?: string,
  userId: string | undefined,
  setsData: SetDataJSON[],
  isLoading?: boolean,
  userCollection: SetDataJSON[] | "",
  userWishes: SetDataJSON[] | "",
  isSameUser: boolean
}

export const SetsTable: React.FC<Props> = ({ setsData, isLoading, userCollection, userWishes, isSameUser, userId }) => {
  
  const pathname = usePathname()
  const userCollectionItemsIds = userCollection && userCollection?.map((item) => item.set_num);
  const userWishesItemsIds = userWishes && userWishes?.map((item) => item.set_num);

  if (setsData.length == 0 && (!pathname.includes('/profile'))) {
    return (
      <NotFound type='sets' />
    )
  }

  return (
    <>

      <div className='flex flex-wrap justify-evenly mt-8 gap-2 mb-4 sm:gap-8'>

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
          <SetCard isSameUser={isSameUser} isUserWishSet={userWishesItemsIds.includes(item.set_num)} isUserOwnSet={userCollectionItemsIds?.includes(item.set_num)} userId={userId} key={item.set_num} data={item} />
        ))}
      </div>
    </>
  )
}
