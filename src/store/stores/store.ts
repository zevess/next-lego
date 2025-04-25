import { createStore } from 'zustand/vanilla'

export type StoreState = {
    userId: string | undefined
}

export type StoreActions = {
    setUserId: () => void,
}

export type Store = StoreState & StoreActions

export const initStore = (userId: string | undefined): StoreState => {
    return { userId: userId }
}

export const defaultInitState: StoreState = {
    userId: ""
}

export const createAppStore = (
    initState: StoreState = defaultInitState,
) => {
    return createStore<Store>()((set) => ({
        ...initState,
        setUserId: () => set((state) => ({ userId: state.userId }))
    }))
}