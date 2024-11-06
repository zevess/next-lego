'use client'


import { Logo, ProviderAuth, Typography } from '@/components/shared'
import { Card } from '@/components/ui'
import { CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

interface Props {
  className?: string
}

export default function Page({ params: { className } }: { params: Props }) {
  return (
    <div className={className}>
      <Card className='mx-auto max-w-[560px]'>
        <CardHeader>
          <Logo />
          <Typography variant='h2' text={"Войти"} className='mx-auto' />
        </CardHeader>
        <CardContent>
          <ProviderAuth />
        </CardContent>
      </Card>
    </div>
  )
}
