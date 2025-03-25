import React from 'react'
import { Button } from '../ui'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
    children?: React.ReactNode,
    onClick?: () => void 
}

export const StyledButton: React.FC<Props> = ({ className, children, onClick }) => {
    return (
        <Button onClick={onClick} className={cn("text-white hover:text-orange-400 transition-colors duration-300 dark:text-black dark:hover:text-orange-400", className)}>
            {children}
        </Button>
    )
}
