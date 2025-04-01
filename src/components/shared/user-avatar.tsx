import { cn } from "@/lib/utils"

interface Props {
  className?: string,
  variant: 'small' | 'medium' | "big" | 'large' | 'full'
  src?: string | null
}
export const UserAvatar: React.FC<Props> = ({ className, src, variant }) => {

  const avatarSizes = {
    small: "w-6 max-w-6",
    medium: "w-12 max-w-12",
    big: "w-48 max-w-48",
    large: "w-56 max-w-56",
    full: "w-full h-full",
  }

  return (
    <div className="my-2">
      <img src={src ? src : ""} alt="User Avatar" className={cn("flex rounded-full aspect-square object-cover ", avatarSizes[variant])} />
    </div>
  )
}