"use client"

import { LogOut, PencilLine } from "lucide-react"
import { AlertDialog, Avatar, Button, Input } from "../ui"
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import React from "react"
import { User } from "@prisma/client"
import { updateUserNick } from "@/app/actions"
import { redirect, useRouter } from "next/navigation"
import { AvatarFallback, AvatarImage } from "../ui/avatar"


interface Props {
    userData: User,
    hovering: boolean
}

export const AlertEdit: React.FC<Props> = ({ userData, hovering }) => {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(userData.name)
    const [nick, setNick] = React.useState(userData.userNick)
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    const router = useRouter()

    React.useEffect(() => {
        if (!open) {
            setName(userData.name)
            setNick(userData.userNick)
            setErrorMessage(null);
        }
    }, [open])

    
    const updateNick = async () => {
        setErrorMessage(null);
        try {
            await updateUserNick(userData.id, nick, name).then(() => {
                setName(name)
                setNick(nick)
                router.push(`/profile/${nick}`)
                router.refresh()
                setOpen(false);
            });
        } catch (error: any) {
            setErrorMessage(error.message);
        }

    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                {hovering &&
                    <PencilLine className="mt-2 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-300" />
                }

            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Редактировать профиль</AlertDialogTitle>
                </AlertDialogHeader>

        
                <Input placeholder="Введите имя" value={name ? name : ""} onChange={(e) => setName(e.target.value)}></Input>
                <Input placeholder="Введите ник" value={nick.toLocaleLowerCase()} onChange={(e) => setNick(e.target.value.toLocaleLowerCase())}></Input>
                {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                )}
                <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <Button onClick={updateNick}>Сохранить</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
