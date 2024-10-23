import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className='flex items-center gap-2'>
        <Image src="/logo.png" width={55} height={55} alt='logo' />
        <div>
            <h1 className='text-2xl uppercase font-black'>MY LEGO LIST</h1>
        </div>
    </div>
  )
}
