"use client"
import React from 'react'
import { SetsTable } from './sets-table'
import { PaginationDemo } from './pagination'
import { SetDataJSON } from '@/utils/types'
import { getDataTest, getSets } from '@/app/actions'

interface Props {
    className?: string,
    // setsData: SetDataJSON[],
    userCollection: SetDataJSON[] | "",
    userWishes: SetDataJSON[] | "",
    query: string | '',
    page: string | ''
}

export const SetSearchResults: React.FC<Props> = ({ className, query, page, userCollection, userWishes }) => {

    const [data, setData] = React.useState<any>()

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                // Вызываем API напрямую с использованием await
                const res = await getSets(query, Number(page));
                setData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (query) {
            fetchData();
        }

        // console.log(data)
    }, [query, page])

    console.log(data)

    return (
        <div className={className}>
            {/* <SetsTable setsData={data.results} userCollection={userCollection} userWishes={userWishes} /> */}
            {/* <PaginationDemo /> */}
        </div>
    )
}
