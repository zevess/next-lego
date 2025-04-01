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
            <div className='bg-gray-100 p-3 rounded-md mt-4 dark:bg-neutral-300'>
                <div className='flex justify-between'>
                    <p className='text-lg dark:text-black'>Серия:</p>
                    <p className='text-lg dark:text-black'>{theme?.name}</p>
                </div>
                {setData.num_parts !== 0 && <div className='flex justify-between'>
                    <p className='text-lg dark:text-black'>Количество деталей:</p>
                    <p className='text-lg dark:text-black'>{setData.num_parts}</p>
                </div>}

            </div>
        </div>
    )
}
