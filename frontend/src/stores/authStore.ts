import { AuthService } from "@/services/authService.ts"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthStore {
    bearerToken: string | null
    refreshToken: string | null
    isLoggedIn: boolean
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}

const authService = new AuthService()

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            bearerToken: null,
            refreshToken: null,
            isLoggedIn: false,

            login: async (username: string, password: string) => {
                const bearerToken = await authService.login(username, password)
                set({ bearerToken, isLoggedIn: true })
            },

            logout: () =>
                set({
                    bearerToken: null,
                    refreshToken: null,
                    isLoggedIn: false,
                }),
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({
                bearerToken: state.bearerToken,
                refreshToken: state.refreshToken,
                isLoggedIn: state.isLoggedIn,
            }),
        },
    ),
)
