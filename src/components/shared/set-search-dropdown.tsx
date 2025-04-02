'use client'

import { cn } from '@/lib/utils';

import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Input } from '../ui';

import { Typography } from './typography';

import { useDebounce } from 'react-use'
import { MultipleSetsData, SetData } from '@/lib/types';
import { getSets } from '@/lib/actions';
import { SetTag } from './set-tag';


interface Props {
    className?: string;
    setSelectedItems: React.Dispatch<React.SetStateAction<SetData[]>>;
    selectedItems: SetData[]
}

export const SetSearchDropdown: React.FC<Props> = ({ className, setSelectedItems, selectedItems }) => {
    const [query, setQuery] = React.useState('');

    const [foundItems, setFoundItems] = React.useState<MultipleSetsData| null>();

    const items = foundItems?.results

    const filteredItems = items?.filter((item: SetData) =>
        item.name.toLowerCase().includes(query.toLowerCase()) &&
        !selectedItems.some((selected) => selected.set_num === item.set_num)
    );


    const handleSelectItem = (item: SetData) => {
        setSelectedItems((prev) => [...prev, item]);
        setQuery('');
        setFoundItems(null)
    };

    const handleRemoveItem = (id: string) => {
        setSelectedItems((prev) => prev.filter((item:SetData) => item.set_num !== id));
    };

    useDebounce(async () => {
        try {
            const response = query.length !== 0 ? await getSets(1, query) : '';
            setFoundItems(response);
        } catch (error) {
            console.log(error)
        }
    }, 3500, [query])


    return (
        <div className="mx-auto">

            <Input
                type="text"
                placeholder="Поиск..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-400 focus-visible:ring-0"
            />



            <div className="mt-4 space-y-2">
                {Number(filteredItems?.length) > 0 &&
                    (
                        filteredItems?.map((item: SetData) => (
                            <div
                                key={item.set_num}
                                className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                                onClick={() => handleSelectItem(item)}
                            >
                                <img
                                    src={item.set_img_url}
                                    alt={item.name}
                                    className="w-12 h-12 object-cover rounded-md"
                                />

                                <span className="text-gray-700">{item.name}</span>
                            </div>
                        ))
                    )
                }
                {(Number(filteredItems?.length) == 0) && (
                    <p className="text-gray-500">Ничего не найдено</p>
                )}

            </div>



            {(selectedItems.length > 0 && selectedItems.length < 6) && (
                <div className="mt-6">
                    <Typography variant='h4' className='mb-2' text={'Выбранные наборы:'} />
                    <div className="flex flex-wrap gap-2">
                        {selectedItems.map((item, index) => (
                            <SetTag isLink={false} onClick={()=> handleRemoveItem(item.set_num)} set={item}/>
                            // <div
                            //     key={index}
                            //     className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full text-sm hover:bg-blue-200 hover:cursor-pointer"
                            //     onClick={() => handleRemoveItem(item.set_num)}>
                            //     <img
                            //         src={item.set_img_url}
                            //         alt={item.name}
                            //         className="w-6 h-6 object-cover rounded-full"

                            //     />
                            //     <span className="text-gray-700">{item.name}</span>
                            // </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );


}
