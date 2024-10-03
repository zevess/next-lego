'use client'
import { Typography } from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { Circle, Heart } from 'lucide-react'
import React from 'react'
import StarRatings from 'react-star-ratings';

interface Props {
  className?: string,
  id: string
}

export default function Page({ params: { id, className } }: { params: Props }) {
  const [rating, setRating] = React.useState(0);

  return (
    <div className={'flex flex-col items-center'}>
      <div className='flex flex-wrap justify-center w-full rounded-xl border bg-card text-card-foreground shadow'>
        <img src="https://cdn.rebrickable.com/media/mocs/moc-126699.jpg" className='p-3 w-full object-cover max-w-3xl' alt="" />
        <div className='p-8 flex flex-col  flex-1'>
          <div className='flex justify-between'>
            <div>
              <Typography variant='h1' text='Death Star Final Duel' />
              <Typography variant='h4' text='75291-1' />
              {/* <p>75291-1</p> */}
            </div>
            <Typography variant='h4' text='2020' />
          </div>
          <div className='bg-gray-100 p-3 rounded-md mt-4'>
            <div className='flex justify-between'>
              <p className='text-lg'>Серия:</p>
              <p className='text-lg'>Star Wars</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-lg'>Количество деталей:</p>
              <p className='text-lg'>775</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <Button className='mt-5'>Добавить в коллекцию <Circle className='pl-1' /></Button>
            <Button className='mt-5'>Добавить в желаемое <Heart className='pl-1' /> </Button>
          </div>
          <div className='mt-7 flex justify-center'>
            <StarRatings rating={rating} changeRating={setRating} starRatedColor='orange' numberOfStars={6} />
          </div>
        </div>
      </div>
    </div>
  )
}
