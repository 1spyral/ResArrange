import { useLandingPageStore } from "@/stores"

export default function LandingPage() {
    const landingPageStore = useLandingPageStore()
    function exitLandingPage() {
        landingPageStore.setHasExited()
    }

    return (
        <div className="bg-green flex h-screen flex-col items-center justify-center">
            <div className="text-text-color text-[32px] font-bold">
                Landing Page
            </div>
            <button
                className="bg-green-dark text-button-text hover:bg-green cursor-pointer rounded-[5px] p-[10px_20px] transition-[background-color] duration-200"
                onClick={exitLandingPage}
            >
                Let's Go
            </button>
        </div>
    )
}
