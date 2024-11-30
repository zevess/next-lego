import { auth } from "@/auth"
import Image from "next/image"

 
export const UserAvatar = async() => {
  const session = await auth()
 
  if (!session?.user?.image) return null
 
  return (
    <div>
      <img src={session?.user?.image} alt="User Avatar" />
    </div>
  )
}