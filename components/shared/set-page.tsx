"use client"

import React, { SetStateAction } from 'react'

import { Circle, Heart, Plus, X } from 'lucide-react'
import { SetData, SetDataJSON, setDataPage } from '@/utils/types'
import { Typography } from './typography'
import { Button } from '../ui'
import { setAction } from '@/utils/functions'
import { addSetToCollection, addSetToWishes, removeSetFromCollection, removeSetFromWishes } from '@/app/actions'
import { setThemes } from '@/utils/themes'


interface Props {
  className?: string,
  setData: setDataPage
}

export const SetPage: React.FC<Props> = ({ className, setData }) => {

  const [isOwn, setIsOwn] = React.useState(setData.isOwn)
  const [isWish, setIsWish] = React.useState(setData.isWish)

  const isOwnText = isOwn ? "Удалить из коллекции" : "Добавить в коллекцию"
  const isWishText = isWish ? "Удалить из желаний" : "Добавить в желания"

  const themeName = setThemes.find((item) => item.id == setData.set.theme_id);
  console.log(themeName?.name);


  const handleSetAction = (setDispatch: React.Dispatch<SetStateAction<boolean>>, dispatchValue: boolean, handleAction: (data: SetDataJSON, userId: string) => Promise<void>) => {
    if (setData.userId) {
      setAction(setData.userId, setData.set, setDispatch, dispatchValue, handleAction)
    }
  }

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

            {setData.userId && <Button disabled={isOwn} onClick={() => isWish ? handleSetAction(setIsWish, false, removeSetFromWishes) : handleSetAction(setIsWish, true, addSetToWishes)} className="mt-5 transition-transform hover:scale-105">
              {isWishText}
              {isWish ? <Heart fill="red" strokeWidth={1} /> : <Heart />}

            </Button>}

            {setData.userId && <Button disabled={isWish} onClick={() => isOwn ? handleSetAction(setIsOwn, false, removeSetFromCollection) : handleSetAction(setIsOwn, true, addSetToCollection)} className="mt-5 transition-transform hover:scale-105"> {isOwnText}
              {isOwn ? <X /> : <Plus />}
            </Button>}

          </div>
        </div>
      </div>
    </div>
  )
}
