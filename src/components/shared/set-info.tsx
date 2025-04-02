import React from 'react'
import { Typography } from './typography'
import { SetData, SetThemesData } from '@/lib/types'


interface Props {
    className?: string,
    setData: SetData,
    theme: SetThemesData | undefined
}

export const SetInfo: React.FC<Props> = ({ className, setData, theme }) => {
    return (
        <div className={className}>
            <div className='flex justify-between'>
                <div>
                    <Typography variant='h1' text={setData.name} />
                    <Typography variant='h4' text={setData.set_num} />

                </div>
                <Typography variant='h4' text={setData.year} />
            </div>
            <div className='bg-gray-100 p-3 rounded-md mt-4 dark:bg-transparent'>
                <div className='flex justify-between'>
                    <p className='text-lg dark:text-[rgba(242,242,242,0.9)]'>Серия:</p>
                    <p className='text-lg dark:text-[rgba(242,242,242,0.9)]'>{theme?.name}</p>
                </div>
                {setData.num_parts !== 0 && <div className='flex justify-between'>
                    <p className='text-lg dark:text-[rgba(242,242,242,0.9)]'>Количество деталей:</p>
                    <p className='text-lg dark:text-[rgba(242,242,242,0.9)]'>{setData.num_parts}</p>
                </div>}

            </div>
        </div>
    )
}
