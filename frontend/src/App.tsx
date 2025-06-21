import LandingPage from "@/components/LandingPage.tsx"
import { useAuthStore } from "@/stores"
import MainPage from "@/components/MainPage.tsx"

export default function App() {
    const { isLoggedIn } = useAuthStore()

    return (
        <div className="font-[Arial,_sans-serif]">
            {!isLoggedIn && <LandingPage />}
            {isLoggedIn && <MainPage />}
        </div>
    )
}
