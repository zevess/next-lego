"use client"
import React from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Typography } from './typography'
import { cn } from '@/lib/utils'
import { Button, Input } from '../ui'
import { Search } from 'lucide-react'
import { PaginationDemo } from './pagination'
import { SelectThemes } from './select-themes'
import { DualRangeYearSlider } from './year-slider'



interface Props {
    className?: string,

}

export const SetSearch: React.FC<Props> = ({ className }) => {


    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const [searchQuery, setSearchQuery] = React.useState(searchParams.get('search') || '')
    const [yearValues, setYearValues] = React.useState([1949, 2024]);
    const [selectedThemeId, setSelectedThemeId] = React.useState(0)

    console.log(selectedThemeId)

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

    return (
        <div className={className}>
            <div className="flex flex-col items-center mt-10">
                <Typography variant="h1" text="Найдите набор" />
                <div className={cn("flex w-full max-w-screen-md items-center space-x-2 p-4 dark:bg-black", className)}>
                    <Input defaultValue={searchParams.get('search')?.toString()} onChange={onChange} className="text-2xl dark:text-white" type="text" placeholder={"Введите артикул или название набора на английском"} />
                    <Button onClick={() => onClick(searchQuery)}>
                        <Search />
                    </Button>
                </div>
                <div className='w-full max-w-screen-md flex flex-col items-center flex-wrap md:flex-nowrap md:flex-row md:items-center'>
                    <SelectThemes className='my-6' selectedThemeId={selectedThemeId} setSelectedThemeId={setSelectedThemeId} />
                    <DualRangeYearSlider className='my-4' valueFrom={1949} valueTo={2024} step={1} values={yearValues} setValues={setYearValues} />
                </div>

            </div>
        </div>
    )
}
