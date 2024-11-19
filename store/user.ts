import { sessionProps } from '@/utils/types'
import { create } from 'zustand'

interface SessionStore {
    session: sessionProps | null,
    setSession: (session: sessionProps | null) => void
}

const useSessionStore = create<SessionStore>((set) => ({
    session: null, // Изначально сессия отсутствует
    setSession: (session) => set({ session })
}));

export default useSessionStore