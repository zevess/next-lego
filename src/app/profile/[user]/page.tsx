

import { getUserByNick, getUserCollection, getUserWishes } from '@/lib/actions';
import { auth } from '@/lib/auth';
import { ProfilePage, NotFound } from '@/components/shared';

import React from 'react'



export default async function Page({ params }: { params: Promise<{ user: string }>}) {

  const user = (await params).user

  const session = await auth()

  const userData = await getUserByNick(user)

  const userCollections = userData?.id ? await getUserCollection(userData?.id) : "";
  const userWishes = userData?.id ? await getUserWishes(userData?.id) : "";

  const isSameUser = session?.user?.id == userData?.id

  if (!userData) {
    return <NotFound type='user' />
  } else {
    return <ProfilePage userWishes={userWishes} userCollection={userCollections} data={userData} isSameUser={isSameUser} />
    
  }

}
