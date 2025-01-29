import { cn } from "@/lib/utils"

interface Props {
  className?: string,
  src?: string | null
}
export const UserAvatar: React.FC<Props> = ({ className, src }) => {

  return (
    <div className="my-2">
      <img src={src ? src : ""} alt="User Avatar" className={cn("flex rounded-full aspect-square h-full w-full object-cover ", className)} />
    </div>
  )
}