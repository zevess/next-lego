"use client"

import { AlertDialog } from "../ui"
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { FC, ReactNode } from "react"


interface Props {
  className?: string,
  alertTitle: string,
  alertCancelText: string,
  alertActionText: string,
  onClick: () => void,
  children: ReactNode
}

export const Alert: FC<Props> = ({ className, alertActionText, alertCancelText, alertTitle, onClick, children }) => {
  return (
    <div className={className}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{alertCancelText}</AlertDialogCancel>
            <AlertDialogAction onClick={onClick}>{alertActionText}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>

  )
}
