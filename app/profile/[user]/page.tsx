import { auth } from '@/auth'
import { SetsTable } from '@/components/shared/sets-table'
import { Typography } from '@/components/shared/typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

interface Props {
  className?: string,
  id: string
}

export default async function Page({ params: { id, className } }: { params: Props }) {
  
  const session = await auth()

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div className={className}>
      <div className='w-full flex flex-col items-center'>
        <Avatar className='max-w-56 w-1/3 h-1/3 mb-3'>
          {session?.user?.image && <AvatarImage src={session?.user?.image} alt="@shadcn" />}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {session?.user?.name && <Typography variant={'h2'} text={session?.user?.name} />}
        
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
