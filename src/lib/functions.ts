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

