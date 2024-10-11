'use client'
import { login } from '@/actions/auth'
import { Logo } from '@/components/shared/logo'
import { DialogCloseButton } from '@/components/shared/modal'
import { ProviderAuth } from '@/components/shared/provider-auth'
import { Typography } from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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
