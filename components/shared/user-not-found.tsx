import { Frown } from 'lucide-react'
import React from 'react'
import { Typography } from './typography'

interface Props {
  className?: string
}

export const UserNotFound: React.FC<Props> = ({ className }) => {
  return (
    <div className={'w-full flex flex-col items-center'}>
        <Frown width={'25%'} height={'25%'} color='gray' strokeWidth={'1'}/>
        <Typography variant={'h3'} text={'Пользователь не найден или не существует'} className='text-gray-300 text-center'/>
    </div>
  )
}
