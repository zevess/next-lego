import { getSingleSet, getUsersByOwnSet, getUsersByWishSet } from '@/lib/actions'
import { auth } from '@/lib/auth'
import { SetPage } from '@/components/shared'
import React from 'react'
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const id = (await params).id;
  return {
    title: id
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

  const id = (await params).id;

  const session = await auth()

  const setData = await getSingleSet(id, session?.user?.id ? session?.user?.id : "")
  const usersOwn = await getUsersByOwnSet(id)
  const userWish = await getUsersByWishSet(id);


  return (
    <SetPage setData={setData} />
  )
}
