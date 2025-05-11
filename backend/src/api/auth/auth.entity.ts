import { User } from "@/api/user"
import { Entity, Enum, ManyToOne, Property } from "@mikro-orm/core"

@Entity()
export class Auth {
    @ManyToOne(() => User, { primary: true })
    user!: User

    @Enum({ items: () => ProviderType })
    provider!: ProviderType

    @Property({ type: "text", nullable: true })
    providerUserId?: string

    @Property({ type: "text", nullable: true })
    username?: string

    @Property({ type: "text", nullable: true })
    password?: string
}

export enum ProviderType {
    PASSWORD = "password",
    GOOGLE = "google",
    GITHUB = "github"
}
