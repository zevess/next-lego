import React from 'react'
import { Input } from '../ui'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
}

export const StyledInput: React.FC<Props> = ({ className }) => {
    return (
        <Input className={cn('w-full px-4 py-2 rounded-md focus:outline-none focus:border-orange-400', className)}/>
    )
}
