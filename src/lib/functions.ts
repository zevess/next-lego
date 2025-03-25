import { SetStateAction } from "react";
import { SetDataJSON } from "./types";

export const setAction = (userId: string, data: SetDataJSON, setDispatch: React.Dispatch<SetStateAction<boolean>>, dispatchValue: boolean, handleAction:(data: SetDataJSON, userId: string) => Promise<void>) => {
    try {
        if (userId) {
            handleAction(data, userId).then(()=> setDispatch(dispatchValue))
        }
    } catch (error) {
        console.error(error);
    }
};

export const handleAddSetToWishes = (data: SetDataJSON, userId: string, setIsWish: React.Dispatch<SetStateAction<boolean>>, isWish: boolean, addSetToWishes: (data: SetDataJSON, userId: string) => Promise<void>) => {
    if (userId) {
        addSetToWishes(data, userId).then(() => setIsWish(!isWish))
    }
}

export const handleAddSetToCollection = (data: SetDataJSON, userId: string, setIsOwn: React.Dispatch<SetStateAction<boolean>>, isOwn: boolean, addSetToCollection: (data: SetDataJSON, userId: string) => Promise<void>) => {
    if (userId) {
        addSetToCollection(data, userId).then(() => setIsOwn(!isOwn))
    }
}