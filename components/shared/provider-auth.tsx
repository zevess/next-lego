"use client"
import React from 'react'

import { GithubIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { login } from '@/actions'
import { Button } from '../ui'

interface Props {
  className?: string
}

export const ProviderAuth: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex flex-col",className) }>
        <Button className='w-full mt-4' onClick={()=> login("github")}><GithubIcon className='mr-2'/>Войти через GitHub </Button>
        <Button className='w-full mt-4' onClick={()=> login("google")}><img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' height={20} width={20} alt='Google' className='mr-2'/>Войти через Google </Button>
    </div>
  )
}
