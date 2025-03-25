import { Frown } from 'lucide-react'
import React from 'react'
import { Typography } from './typography'

interface Props {

  type: "user" | "sets" | "product",
}

export const NotFound: React.FC<Props> = ({ type }) => {
  return (
    <div className={'w-full flex flex-col items-center'}>
        <Frown width={'25%'} height={'25%'} color='gray' strokeWidth={'1'}/>
        {type == 'user' && <Typography variant={'h3'} text={"Пользователь не найден или не существует"} className='text-gray-300 text-center'/>}
        {type == 'sets' && <Typography variant={'h3'} text={"Набор не найден. Измените запрос"} className='text-gray-300 text-center'/>}
        {type == 'product' && <Typography variant={'h3'} text={"Товар не найден. Измените запрос"} className='text-gray-300 text-center'/>}
    </div>
  )
}
