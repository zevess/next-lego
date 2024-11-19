import { SetStateAction } from "react";
import { SetDataJSON } from "./types";
import { updateUserNick } from "@/app/actions";


export const setAction = (userId: string, data: SetDataJSON, setDispatch: React.Dispatch<SetStateAction<boolean>>, dispatchValue: boolean, handleAction:(data: SetDataJSON, userId: string) => Promise<void>) => {
    try {
        if (userId) {
            handleAction(data, userId).then(()=> setDispatch(dispatchValue))
        }
    } catch (error) {
        console.error(error);
    }
};


export const updateNick = async(id: string, nick: string) =>{
    const updatedUserNick = await updateUserNick(id, nick)
    return updatedUserNick
}