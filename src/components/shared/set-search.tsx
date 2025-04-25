"use client"
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Typography } from './typography'
import { cn } from '@/lib/utils'
import { Button, Input } from '../ui'
import { Search } from 'lucide-react'
import { DualRangeYearSlider } from './year-slider'
import { YearInput } from './year-input'
import { SelectThemes } from './select-themes'


interface Props {
    className?: string,

}

export const SetSearch: React.FC<Props> = ({ className }) => {

    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const [searchQuery, setSearchQuery] = React.useState(searchParams.get('search') || '')
    const [yearValues, setYearValues] = React.useState([1949, 2025]);
    const [selectedThemeId, setSelectedThemeId] = React.useState(0)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const onClick = (term: string) => {
        const params = new URLSearchParams(searchParams);

        params.set('page', '1')
        params.set('themeId', String(selectedThemeId))
        params.set('minYear', String(yearValues[0]))
        params.set('maxYear', String(yearValues[1]))
        params.set('search', term)

        replace(`${pathname}?${params.toString()}`)
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onClick(searchQuery);
        }
    };

 


    return (
        <div className={className}>
            
            <div className="flex flex-col items-center mt-10">
                <Typography variant="h1" text="Найдите набор" />
                <div className={cn("flex w-full max-w-screen-md items-center space-x-2 p-4 dark:bg-black", className)}>
                    <Input defaultValue={searchParams.get('search')?.toString()} onChange={onChange} className="text-2xl dark:text-white" type="text" placeholder={"Введите артикул или название набора на английском"} onKeyDown={handleKeyDown} />
                    <Button onClick={() => onClick(searchQuery)}>
                        <Search />
                    </Button>
                </div>
                <div className='w-full max-w-screen-md flex flex-col items-center flex-wrap'>
                    <div className='w-full'>
                        <span className='bg-gray-100 p-3 rounded-2xl mx-5 dark:bg-zinc-600'>Серия: </span>

                        <SelectThemes className='my-6' selectedThemeId={selectedThemeId} setSelectedThemeId={setSelectedThemeId} />
                    </div>

                    <span className='bg-gray-100 p-3 rounded-2xl mb-4 dark:bg-zinc-600'>Выберите год выпуска: от <b>{yearValues[0]}</b> до <b>{yearValues[1]}</b></span>

                    <DualRangeYearSlider className='hidden sm:block my-4' valueFrom={1949} valueTo={2025} step={1} values={yearValues} setValues={setYearValues} />

                    <YearInput className='block sm:hidden' valueFrom={1949} valueTo={2025} step={1} values={yearValues} setValues={setYearValues} />
                </div>

            </div>
        </div>
    )
}
