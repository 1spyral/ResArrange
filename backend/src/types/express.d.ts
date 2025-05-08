import { Payload } from "@/types/payload"

declare global {
    namespace Express {
        interface Request {
            user?: Payload
        }
    }
}

export {}
