"use client"
import { logout } from "@/actions"


import { LogOut } from "lucide-react"
import { AlertDialog, Button } from "../ui"
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"

export function AlertExit() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost"><LogOut /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы уверены что хотите выйти?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={() => logout()}>Выйти</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
