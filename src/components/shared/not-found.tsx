import { Frown } from 'lucide-react'
import React from 'react'
import { Typography } from './typography'

interface Props {

  type: "user" | "sets",
}

export const NotFound: React.FC<Props> = ({ type }) => {
  return (
    <div className={'w-full flex flex-col items-center'}>
        <Frown width={'25%'} height={'25%'} color='gray' strokeWidth={'1'}/>
        <Typography variant={'h3'} text={type == 'user' ? "Пользователь не найден или не существует" : "Наборы не найдены. Измените запрос"} className='text-gray-300 text-center'/>
    </div>
  )
}
