import { getSingleSet, getUsersByOwnSet, getUsersByWishSet } from '@/app/actions'
import { auth } from '@/auth'
import { SetPage } from '@/components/shared'

import React from 'react'

interface Props {
  className?: string,
  id: string
}

export default async function Page({ params }: { params: { id: string } }) {
  
  const { id } = params

  const session = await auth()


  const setData = await getSingleSet(id, session?.user?.id ? session?.user?.id : "")
  // console.log(setData);

  const usersOwn = await getUsersByOwnSet(id)
  const userWish = await getUsersByWishSet(id);
  // console.log(usersOwn);

  return (
    <SetPage setData={setData} usersOwn={usersOwn} userWish={userWish}/>
  )
}


// {
//   set: {
//     set_num: '60047-1',
//     name: 'Police Station',
//     year: 2014,
//     theme_id: 61,
//     num_parts: 854,
//     set_img_url: 'https://cdn.rebrickable.com/media/sets/60047-1/3836.jpg',
//     set_url: 'https://rebrickable.com/sets/60047-1/police-station/',
//     last_modified_dt: '2016-05-29T00:30:55.698715Z'
//   },
//   isOwn: true,
//   isWish: false
// }