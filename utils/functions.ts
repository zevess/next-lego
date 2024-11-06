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

// export const handleRemoveSetFromCollection = (userdId: string) =>{
//     try {
//         if (userId){
//             removeSetFromCollection(data, userId).then(() => setIsOwn(false))
//         }
//     } catch (error) {
//         console.error(error)
//     }

// }


// export const handleAddSetToWishes = (userdId: string) => {
//     try {
//         if (userId) {
//             addSetToWishes(data, userId).then(()=> setIsWish(true));
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };

// export const handleRemoveSetFromWishes = (userdId: string) =>{
//     try {
//         if (userId){
//             removeSetFromWishes(data, userId).then(() => setIsWish(false))
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }