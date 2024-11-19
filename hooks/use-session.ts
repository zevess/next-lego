import { auth } from "@/auth";
import useSessionStore from "@/store/user";
import { useSession } from "next-auth/react"
import React from "react";

export const useUserSession = async() =>{
    const session = await auth()
    const setSession = useSessionStore((state) => state.setSession)

    React.useEffect(()=>{
        if(session){
            setSession({
                user:{
                    id: String(session.user?.id),
                    name: String(session.user?.name),
                    email: String(session.user?.email),
                    image: String(session.user?.image),
                },
                expires: session.expires
            })
        } else{
            setSession(null)
        } 
    }, [session, setSession])
}