import { getSingleSet } from '@/app/actions'
import { SetPage } from '@/components/shared/set-page'
import React from 'react'

interface Props {
  className?: string,
  id: string
}

export default async function Page({ params }: { params: { id: string } }) {
  
  const { id } = params

  const setData = await getSingleSet(id)
  console.log(setData);

  return (
    <SetPage setData={setData}/>
  )
}
