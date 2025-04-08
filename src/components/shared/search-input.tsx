import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import React, { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Button, Input } from "../ui"

interface SearchInputProps {
  className?: string,
  placeholder?: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  value: string,
  onClick: () => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ className, placeholder, setSearchQuery, value, onClick }) => {
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className={cn("flex w-full max-w-screen-md items-center space-x-2 p-4 dark:bg-black", className)}>
      <Input onChange={handleChange} value={value} className="text-2xl dark:text-white" type="text" placeholder={placeholder} />
      <Button disabled={value.length < 3} onClick={() => onClick()}>
        <Search />
      </Button>
    </div>
  )
}
