"use client"
import React from 'react'
import { Typography } from './typography'

import { SetsTable } from './sets-table'
import { SearchInput } from './search-input'
import { getSets, getSingleSet } from '@/app/actions'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

interface Props {
    className?: string,
    
}

export const SetSearch: React.FC<Props> = ({ className }) => {


    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();

    const [searchQuery, setSearchQuery] = React.useState(searchParams.get('search') || '')


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    // const onChange = useDebouncedCallback((term: string) => {
    //     const params = new URLSearchParams(searchParams);
    //     if (term){
    //         params.set('search', term)
    //     } else{
    //         params.delete('search')
    //     }
    //     replace(`${pathname}?${params.toString()}`)
    // }, 2000)

    const onClick = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term)
        } else {
            params.delete('search')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className={className}>
            <div className="flex flex-col items-center mt-10">
                <Typography variant="h1" text="Найдите набор" />
                {/* <SearchInput onClick={() => onClick(searchQuery)} setSearchQuery={setSearchQuery} value={searchQuery} placeholder="Введите артикул или название набора на английском" /> */}
                <div className={cn("flex w-full max-w-screen-md items-center space-x-2 p-4 dark:bg-black", className)}>
                    <Input defaultValue={searchParams.get('search')?.toString()} onChange={onChange} className="text-2xl dark:text-white" type="text" placeholder={"Введите артикул или название набора на английском"} />
                    <Button disabled={searchQuery.length < 3} onClick={() => onClick(searchQuery)}>
                        <Search />
                    </Button>
                </div>
                
            </div>
        </div>
    )
}
