import { addSetToCollection, getUser, getUserCollection, getUserWishes } from '@/app/actions'
import { auth } from '@/auth'
import { ProfilePage } from '@/components/shared/profile-page'
import { SetsTable } from '@/components/shared/sets-table'
import { Typography } from '@/components/shared/typography'
import { UserNotFound } from '@/components/shared/user-not-found'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import prisma from '@/prisma/prisma-client'
import { Heart } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation'

import React from 'react'



export default async function Page({ params }: { params: { user: string } }) {

  const { user } = params;

  const session = await auth()

  const userData = await getUser(user)
  // console.log(userData);
  
  const userCollections =  userData?.id ? await getUserCollection(userData?.id) : "";
  const userWishes = userData?.id ? await getUserWishes(userData?.id) : "";

  // console.log(userWishes);
  

  const isSameUser = session?.user?.id == userData?.id

  if (!userData) {
    return <UserNotFound />
  } else {
    return <ProfilePage userWishes={userWishes} userCollection={userCollections} data={userData} isSameUser={isSameUser} />
  }

}
