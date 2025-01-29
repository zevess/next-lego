"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


import { cn } from "@/lib/utils"
import { Button } from "../ui"


interface Props {
    className?: string,
  }
  

export const ThemeToggle: React.FC<Props> = ({className}) =>{
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={cn("dark:text-white", className)}
        >
            <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}