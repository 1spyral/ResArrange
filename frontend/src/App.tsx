import LandingPage from "@/components/LandingPage.tsx"
import { useLandingPageStore } from "@/stores"
import MainPage from "@/components/MainPage.tsx"

export default function App() {
    const { hasExited } = useLandingPageStore()

    return (
        <div className="font-[Arial,_sans-serif]">
            {!hasExited && <LandingPage />}
            {hasExited && <MainPage />}
        </div>
    )
}
