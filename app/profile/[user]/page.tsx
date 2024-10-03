import { SetsTable } from '@/components/shared/sets-table'
import { Typography } from '@/components/shared/typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart } from 'lucide-react'
import React from 'react'

interface Props {
  className?: string,
  id: string
}

export default function Page({ params: { id, className } }: { params: Props }) {
  return (
    <div className={className}>
      <div className='w-full flex flex-col items-center'>
        <Avatar className='max-w-56 w-1/3 h-1/3 mb-3'>
          <AvatarImage src="https://sun9-62.userapi.com/impg/GM1pu8M-FsCMf_PPYdGQ79olpU-QAv3XiRNIiA/4YmggD6jvm0.jpg?size=720x720&quality=95&sign=143f88a0799f97813ca4642248283d67&type=album" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Typography variant={'h2'} text={'Zevess'} />
      </div>

      <div className='flex flex-col items-center mt-5'>
        <Typography variant='h4' text='В коллекции:' className='mr-auto ml-2' />
        <SetsTable />
      </div>

      <div className='flex flex-col items-center mt-5'>
        <div className='flex items-center mr-auto ml-2'>
          <Heart />

          <Typography variant='h4' text='В желаемом:' className='' />
        </div>
        <SetsTable />
      </div>
    </div>
  )
}
