'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { createAppStore, initStore, Store } from '../stores/store'
import {useStore} from 'zustand'

export type StoreApi = ReturnType<typeof createAppStore>

export const StoreContext = createContext<StoreApi | undefined>(
    undefined,
)

export interface StoreProviderProps {
    userId: string | undefined,
    children: ReactNode,
}

export const StoreProvider = ({
    userId,
    children,
}: StoreProviderProps) => {
    const storeRef = useRef<StoreApi | null>(null)
    
    if (storeRef.current === null) {
        storeRef.current = createAppStore(initStore(String(userId)))
    }

    return (
        <StoreContext.Provider value={storeRef.current}>
            {children}
        </StoreContext.Provider>
    )
}

export const useAppStore = <T,>(
    selector: (store: Store) => T,
): T => {
    const storeContext = useContext(StoreContext)

    if (!storeContext) {
        throw new Error(`useStore must be used within StoreProvider`)
    }

    return useStore(storeContext, selector)
}
