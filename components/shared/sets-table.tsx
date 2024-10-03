'use client'
import React from 'react'
import { SetCard } from './set-card'
import { constants } from '@/constants'
import { Button } from '../ui/button'

interface Props {
  className?: string
}

export const SetsTable: React.FC<Props> = ({ className }) => {

  const [expanded, setExpanded] = React.useState(false)
  const cardsArr = expanded ? constants : constants.slice(0, 3);

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-wrap justify-evenly mt-8 gap-2 sm:gap-8'>
        {cardsArr.map((item) => (
          <SetCard key={item.id} title={item.title} id={item.id} year={item.year} img={item.img} />
        ))}
      </div>
      <Button className='mt-10' onClick={() => setExpanded(!expanded)}>{expanded ? 'Скрыть ' : 'Показать все '}</Button>
    </div>
  )
}
