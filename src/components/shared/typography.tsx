import { cn } from '@/lib/utils'
import React from 'react'

type TypographyTypes = 'h1' | 'h2' | 'h3' | 'h4'

interface Props {
    className?: string,
    variant: TypographyTypes,
    text: string | number
}


export const Typography: React.FC<Props> = ({ className, variant, text }) => {

    const classNamesByType = {
        h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight',
        h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
        h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        h4: 'scroll-m-20 text-xl font-semibold tracking-tight'
    }

    return React.createElement(
        variant, { className: cn(classNamesByType[variant], className)},
        text,
    );
}
