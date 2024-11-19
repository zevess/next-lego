"use client"

import { LogOut, PencilLine } from "lucide-react"
import { AlertDialog, Button, Input } from "../ui"
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import React from "react"
import { User } from "@prisma/client"
import { updateUserNick } from "@/app/actions"
import { redirect, useRouter } from "next/navigation"


interface Props {
    userData: User,
    hovering: boolean
}

export const AlertEdit: React.FC<Props> = ({ userData, hovering }) => {

    const [name, setName] = React.useState(userData.name)
    const [nick, setNick] = React.useState(userData.userNick)
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    console.log(errorMessage);

    const router = useRouter()

    const updateNick = async () => {
        setErrorMessage(null); 
        
        try {
            await updateUserNick(userData.id, nick, name).then(() => {
                router.push(`/profile/${nick}`)
                router.refresh()
            });
        } catch (error: any) {
            setErrorMessage(error.message); 
        } 
       
    };

    return (
        <AlertDialog>
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
                    {/* <AlertDialogAction onClick={updateNick} disabled={isLoading}>{isLoading ? 'Сохранение...' : 'Сохранить'}</AlertDialogAction> */}
                    <Button onClick={updateNick}>Сохранить</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
