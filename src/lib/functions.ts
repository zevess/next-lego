import { SetStateAction } from "react";
import { SetData } from "./types";


export const setAction = (userId: string, data: SetData, setDispatch: React.Dispatch<SetStateAction<boolean>>, dispatchValue: boolean, handleAction:(data: SetData, userId: string) => Promise<void>) => {
    try {
        if (userId) {
            handleAction(data, userId).then(()=> setDispatch(dispatchValue))
        }
    } catch (error) {
        console.error(error);
    }
};

export const handleAddSetToWishes = (data: SetData, userId: string, setIsWish: React.Dispatch<SetStateAction<boolean>>, isWish: boolean, addSetToWishes: (data: SetData, userId: string) => Promise<void>) => {
    if (userId) {
        addSetToWishes(data, userId).then(() => setIsWish(!isWish))
    }
}

export const handleAddSetToCollection = (data: SetData, userId: string, setIsOwn: React.Dispatch<SetStateAction<boolean>>, isOwn: boolean, addSetToCollection: (data: SetData , userId: string) => Promise<void>) => {
    if (userId) {
        addSetToCollection(data, userId).then(() => setIsOwn(!isOwn))
    }
}