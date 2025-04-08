"use client"
import React from 'react'
import { Heart, Plus, X } from 'lucide-react'
import { Button } from '../ui'
import { handleAddSetToCollection, handleAddSetToWishes, setAction } from '@/lib/functions'
import { setThemes } from '@/lib/themes'
import { User } from '@prisma/client'
import { SetUsersList } from './set-users-list'
import { SetInfo } from './set-info'
import { SetPageProps } from '@/lib/types'
import { addSetToCollection, addSetToWishes } from '@/lib/actions/set'



interface Props {
  setData: SetPageProps,
  usersOwn: User[],
  userWish: User[]
}

export const SetPage: React.FC<Props> = ({ setData, userWish, usersOwn }) => {

  const [isOwn, setIsOwn] = React.useState(setData.isOwn)
  const [isWish, setIsWish] = React.useState(setData.isWish)
  console.log(setData)
  const isOwnText = isOwn ? "Удалить из коллекции" : "Добавить в коллекцию"
  const isWishText = isWish ? "Удалить из желаний" : "Добавить в желания"

  const themeName = setThemes.find((item) => item.id == setData.set.theme_id);

  return (
    <div className={'flex flex-col items-center'}>
      <div className='flex flex-wrap justify-center w-full rounded-xl border bg-card text-card-foreground shadow'>

        <img src={setData.set.set_img_url} className='p-3 w-full object-cover max-w-3xl' alt="" />
        <div className='p-8 flex flex-col  flex-1'>
          <SetInfo setData={setData.set} theme={themeName} />
          <div className='flex flex-col'>

            {setData.userId && <Button disabled={isOwn} onClick={() => handleAddSetToWishes(setData.set, setData.userId, setIsWish, isWish, addSetToWishes)} className="mt-5 transition-transform hover:scale-105">
              {isWishText}
              {isWish ? <Heart fill="red" strokeWidth={1} /> : <Heart />}
            </Button>}
            {userWish.length > 0 && (
              <SetUsersList variant='wish' users={userWish} />
            )}

            {setData.userId && <Button disabled={isWish} onClick={() => handleAddSetToCollection(setData.set, setData.userId, setIsOwn, isOwn, addSetToCollection)} className="mt-5 transition-transform hover:scale-105"> {isOwnText}
              {isOwn ? <X /> : <Plus />}
            </Button>}

            {usersOwn.length > 0 && (
              <SetUsersList variant='own' users={usersOwn} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
