"use client"
import React from 'react'

import { GithubIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '../ui'
import { providerLogin } from '@/lib/actions'

interface Props {
  className?: string
}

export const ProviderAuth: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex justify-between",className) }>
        <Button className='w-full mx-3' onClick={()=> providerLogin("github")}><GithubIcon className='mr-2'/>GitHub </Button>
        <Button className='w-full mx-3' onClick={()=> providerLogin("google")}><img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' height={20} width={20} alt='Google' className='mr-2'/>Google </Button>
    </div>
  )
}

