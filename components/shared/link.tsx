import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface Props {
  className?: string,
  href: string, 
  children?: React.ReactNode
}

export const StyledLink: React.FC<Props> = ({ className, href, children }) => {
  return (
   <Link href={href} className={cn("text-black hover:text-orange-400 transition-colors duration-300 dark:text-white dark:hover:text-orange-400", className)}>
        {children}
   </Link>
  )
}
