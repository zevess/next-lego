"use client"

import React, { SetStateAction } from 'react'

import { Heart, Plus, X } from 'lucide-react'
import { SetDataJSON, setDataPage } from '@/lib/types'
import { Typography } from './typography'
import { Avatar, Button } from '../ui'
import { handleAddSetToCollection, handleAddSetToWishes, setAction } from '@/lib/functions'
import { addSetToCollection, addSetToWishes } from '@/lib/actions'
import { setThemes } from '@/lib/themes'
import { User } from '@prisma/client'
import { AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { UsersDialog } from './users-dialog'



interface Props {
  setData: setDataPage,
  // usersOwn: User[],
  // userWish: User[]
}

export const SetPage: React.FC<Props> = ({ setData }) => {

  // const [isOwn, setIsOwn] = React.useState(setData.isOwn)
  // const [isWish, setIsWish] = React.useState(setData.isWish)
  console.log(setData)
  // const isOwnText = isOwn ? "Удалить из коллекции" : "Добавить в коллекцию"
  // const isWishText = isWish ? "Удалить из желаний" : "Добавить в желания"

  const themeName = setThemes.find((item) => item.id == setData.set.theme_id);

  return (
    <div className={'flex flex-col items-center'}>
      <div className='flex flex-wrap justify-center w-full rounded-xl border bg-card text-card-foreground shadow'>

        <img src={setData.set.set_img_url} className='p-3 w-full object-cover max-w-3xl' alt="" />
        <div className='p-8 flex flex-col  flex-1'>
          <div className='flex justify-between'>
            <div>
              <Typography variant='h1' text={setData.set.name} />
              <Typography variant='h4' text={setData.set.set_num} />

            </div>
            <Typography variant='h4' text={setData.set.year} />
          </div>
          <div className='bg-gray-100 p-3 rounded-md mt-4 dark:bg-neutral-300'>
            <div className='flex justify-between'>
              <p className='text-lg dark:text-black'>Серия:</p>
              <p className='text-lg dark:text-black'>{themeName?.name}</p>
            </div>
            {setData.set.num_parts !== 0 && <div className='flex justify-between'>
              <p className='text-lg dark:text-black'>Количество деталей:</p>
              <p className='text-lg dark:text-black'>{setData.set.num_parts}</p>
            </div>}

          </div>
          <div className='flex flex-col'>

            {/* {setData.userId && <Button disabled={isOwn} onClick={() => handleAddSetToWishes(setData.set, setData.userId, setIsWish, isWish, addSetToWishes)} className="mt-5 transition-transform hover:scale-105">
              {isWishText}
              {isWish ? <Heart fill="red" strokeWidth={1} /> : <Heart />}
            </Button>} */}
            {/* {userWish.length > 0 && (
              <div className='my-2'>
                <p>В <b>Желаниях</b> у пользователей:</p>
                <div className='w-full flex'>
                  {userWish.slice(0, 5).map((user) => (
                    <Link key={user.id} href={`/profile/${user.userNick}`}>
                      <Avatar className='w-6 h-6 mx-1'>
                        <AvatarImage src={user.image ? user.image : ""} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Link>
                  ))}
                  {userWish.length > 6 && (
                    <UsersDialog title='В желаниях у пользователей' users={userWish} />
                  )}
                </div>
              </div>
            )} */}


            {/* {setData.userId && <Button disabled={isWish} onClick={() => handleAddSetToCollection(setData.set, setData.userId, setIsOwn, isOwn, addSetToCollection)} className="mt-5 transition-transform hover:scale-105"> {isOwnText}
              {isOwn ? <X /> : <Plus />}
            </Button>} */}

            {/* {usersOwn.length > 0 && (
              <div className='my-2'>
                <p>В <b>Коллекции</b> у пользователей:</p>
                <div className='w-full flex items-center'>
                  {usersOwn.slice(0, 5).map((user) => (
                    <Link key={user.id} href={`/profile/${user.userNick}`}>
                      <Avatar className='w-6 h-6 mx-1'>
                        <AvatarImage src={user.image ? user.image : ""} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Link>
                  ))}
                  {usersOwn.length > 6 &&
                    <UsersDialog title='В коллекции у пользователей: ' users={usersOwn} />
                  }
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  )
}
