import { addSetToCollection, getUser } from '@/app/actions'
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

  const isSameUser = session?.user?.id == userData?.id

  // "set": {
  // "setNum": "75291-1",
  // "name": "Death Star Final Duel",
  // "year": 2020,
  // "themeId": 158,
  // "numParts": 775,
  // "setImageUrl": "https://cdn.rebrickable.com/media/sets/75291-1/67357.jpg",
  // "setUrl": "https://rebrickable.com/sets/75291-1/death-star-final-duel/"
  //   },
  //   "userId": "cm24hc1wa00008azwx90bev6b"

  if (!userData) {
    return <UserNotFound />
  } else {
    return <ProfilePage data={userData} isSameUser={isSameUser} />
  }

}
