"use client"

import { PencilLine } from "lucide-react"
import { AlertDialog, Button, Input, Label } from "@/components/ui"
import { AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import React from "react"
import { User } from "@prisma/client"

import { useRouter } from "next/navigation"
import { AvatarUploader } from "./avatar-uploader"
import { updateProfile, uploadImageToImgbb } from "@/lib/actions"




interface Props {
    userData: User,
    hovering: boolean
}

export const ProfileEdit: React.FC<Props> = ({ userData, hovering }) => {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState(userData.name)
    const [nick, setNick] = React.useState(userData.userNick)
    const [image, setImage] = React.useState<File | null>(null);
    const [isUpload, setIsUpload] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    console.log(image)

    const router = useRouter()

    React.useEffect(() => {
        if (!open) {
            setName(userData.name)
            setNick(userData.userNick)
            setImage(null)
            setErrorMessage(null);
        }
    }, [open, userData.name, userData.userNick, image])

    const handleUpdateProfile = async () => {
        setErrorMessage(null);
        try {
            setIsUpload(true)
            let uploadedImage = userData.image;
            if (image) {
                uploadedImage = await uploadImageToImgbb(image)
            }

            await updateProfile(userData.id, nick, name, uploadedImage).then(() => {
                setName(name);
                setNick(nick);
                router.push(`/profile/${nick}`);
                router.refresh();
                setOpen(false);
                setIsUpload(false);
            });
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
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
                <AvatarUploader setImage={setImage} avatarUrl={userData.image} />
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Введите имя" value={name ? name : ""} onChange={(e) => setName(e.target.value)}></Input>
                <Label htmlFor="nick">Ник</Label>
                <Input id="nick" placeholder="Введите ник" value={nick.toLocaleLowerCase()} onChange={(e) => setNick(e.target.value.toLocaleLowerCase())}></Input>
                {errorMessage && (
                    <p className="text-red-500">{errorMessage}</p>
                )}
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isUpload}>Отмена</AlertDialogCancel>
                    <Button onClick={handleUpdateProfile} disabled={isUpload}>{isUpload ? "Обновление" : "Сохранить"}</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
