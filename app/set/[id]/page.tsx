import { getSingleSet, getUsersByOwnSet, getUsersByWishSet } from '@/app/actions'
import { auth } from '@/auth'
import { SetPage } from '@/components/shared'

import React from 'react'


export default async function Page({ params }: { params: { id: string } }) {
  
  const { id } = params

  const session = await auth()

  const setData = await getSingleSet(id, session?.user?.id ? session?.user?.id : "")
  const usersOwn = await getUsersByOwnSet(id)
  const userWish = await getUsersByWishSet(id);


  return (
    <SetPage setData={setData} usersOwn={usersOwn} userWish={userWish}/>
  )
}
