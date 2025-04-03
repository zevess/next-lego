import { SetData } from '@/lib/types'
import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string,
    set: SetData,
    onClick?: () => void,
    isLink: boolean
}

export const SetTag: React.FC<Props> = ({ className, set, onClick, isLink }) => {
    if (isLink) return (
        <a href={`/set/${set.set_num}`}>
            <div
                key={set.set_num}
                className={cn("flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full text-sm hover:bg-blue-200 hover:cursor-pointer", className)}
                onClick={onClick}>

                <img
                    src={set.set_img_url}
                    alt={set.name}
                    className="w-6 h-6 object-cover rounded-full"
                />
                <span className="text-gray-700">{set.name}</span>
            </div>
        </a>
    )
    return (
        <div
            key={set.set_num}
            className={cn("flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full text-sm hover:bg-blue-200 hover:cursor-pointer", className)}
            onClick={onClick}>

            <img
                src={set.set_img_url}
                alt={set.name}
                className="w-6 h-6 object-cover rounded-full"
            />
            <span className="text-gray-700">{set.name}</span>
        </div>
    )
}
