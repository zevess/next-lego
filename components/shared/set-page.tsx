import React from 'react'
import { Typography } from './typography'
import { Button } from '../ui/button'
import { Circle, Heart } from 'lucide-react'
import { SetData, SetDataJSON } from '@/utils/types'

interface Props {
  className?: string,
  setData: SetDataJSON
}

export const SetPage: React.FC<Props> = ({ className, setData }) => {
  return (
    <div className={'flex flex-col items-center'}>
      <div className='flex flex-wrap justify-center w-full rounded-xl border bg-card text-card-foreground shadow'>
        
        <img src={setData.set_img_url} className='p-3 w-full object-cover max-w-3xl' alt="" />
        <div className='p-8 flex flex-col  flex-1'>
          <div className='flex justify-between'>
            <div>
              <Typography variant='h1' text={setData.name} />
              <Typography variant='h4' text={setData.set_num} />
              
            </div>
            <Typography variant='h4' text={setData.year} />
          </div>
          <div className='bg-gray-100 p-3 rounded-md mt-4 dark:bg-neutral-300'>
            <div className='flex justify-between'>
              <p className='text-lg dark:text-black'>Серия:</p>
              <p className='text-lg dark:text-black'>Star Wars</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-lg dark:text-black'>Количество деталей:</p>
              <p className='text-lg dark:text-black'>{setData.num_parts}</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <Button className='mt-5'>Добавить в коллекцию <Circle className='pl-1' /></Button>
            <Button className='mt-5'>Добавить в желаемое <Heart className='pl-1' /> </Button>
          </div>
          {/* <div className='mt-7 flex justify-center'>
            <StarRatings rating={rating} changeRating={setRating} starRatedColor='orange' numberOfStars={6} />
          </div> */}
        </div>
      </div>
    </div>
  )
}
