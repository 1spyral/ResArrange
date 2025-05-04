import { orm } from "@/lib/mikro-orm"
import type { Payload } from "@/types/payload"
import { EntityManager } from "@mikro-orm/postgresql"
import { Request } from "express"

export interface Context {
    user?: Payload,
    em: EntityManager
}

export async function context({ req }: { req: Request }) {
    return {
        user: req.user,
        em: orm.em.fork(),
    }
}