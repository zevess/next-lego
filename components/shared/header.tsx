import { cn } from '@/lib/utils'
import React from 'react'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggler'
import Link from 'next/link'
import { User } from 'lucide-react'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('flex items-center justify-between mb-5', className)}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <Link href={'/profile/user'}>
        <User className='text-black hover:text-orange-400 transition-colors duration-300 dark:text-white dark:hover:text-orange-400'/>
      </Link>
      <ThemeToggle />
    </header>
  )
}
