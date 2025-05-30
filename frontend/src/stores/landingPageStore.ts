import { create } from "zustand/react"

interface LandingPageStore {
    hasExited: boolean
    setHasExited: () => void
}

export const useLandingPageStore = create<LandingPageStore>((setState) => ({
    hasExited: false,
    setHasExited: () => setState({ hasExited: true }),
}))
