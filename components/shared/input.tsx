import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import React from "react"

interface InputWithButtonProps{
  className?: string,
  placeholder?: string
}

export const InputWithButton: React.FC<InputWithButtonProps> = ({className, placeholder}) => {
  return (
    <div className={cn("flex w-full max-w-screen-md items-center space-x-2 p-4 dark:bg-black", className)}>
      <Input className="text-2xl dark:text-white" type="text" placeholder={placeholder} />
      <Button type="submit">
        <Search />
      </Button>
    </div>
  )
}