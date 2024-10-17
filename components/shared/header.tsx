

import { cn } from '@/lib/utils'
import React from 'react'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggler'
import Link from 'next/link'
import { LogOut, User } from 'lucide-react'
import { auth } from '@/auth'
import Image from 'next/image'
import { StyledLink } from './link'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { AlertExit } from './alert-exit'


interface Props {
  className?: string

}

export const Header: React.FC<Props> = async ({ className }) => {

  const session = await auth();
  


  return (
    <header className={cn('flex items-center justify-between mb-5', className)}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <Link href={ !session ? '/sign-in' : `/profile/${session?.user?.id}`}>
        <User className='text-black hover:text-orange-400 transition-colors duration-300 dark:text-white dark:hover:text-orange-400' />

      </Link>
      {!session?.user ? (
        <StyledLink href={'/sign-in'}>Войти</StyledLink>

      ) :
        <AlertExit/>
      }
      <ThemeToggle />
    </header>

  )
}
