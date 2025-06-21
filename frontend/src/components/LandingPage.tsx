import { useAuthStore } from "@/stores"

export default function LandingPage() {
    const landingPageStore = useAuthStore()
    function login(username: string, password: string) {
        landingPageStore.login(username, password)
    }

    return (
        <div className="bg-green flex h-screen flex-col items-center justify-center">
            <div className="text-text-color text-[32px] font-bold">
                Landing Page
            </div>
            <input
                type="text"
                placeholder="Username"
                className="text-text-color rounded-[5px] border p-[10px]"
                id="username"
            />
            <input
                type="password"
                placeholder="Password"
                className="text-text-color rounded-[5px] border p-[10px]"
                id="password"
            />
            <button
                className="bg-green-dark text-button-text hover:bg-green cursor-pointer rounded-[5px] p-[10px_20px] transition-[background-color] duration-200"
                onClick={() => {
                    const username = (
                        document.getElementById("username") as HTMLInputElement
                    ).value
                    const password = (
                        document.getElementById("password") as HTMLInputElement
                    ).value
                    login(username, password)
                }}
            >
                Let's Go
            </button>
        </div>
    )
}
