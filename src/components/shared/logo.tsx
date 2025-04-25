import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
        <Image src="/logo.png" width={55} height={55} alt='logo' />
        <div>
            <h1 className='hidden sm:text-2xl sm:uppercase sm:font-black sm:block'>MY LEGO LIST</h1>
        </div>
    </div>
  )
}
