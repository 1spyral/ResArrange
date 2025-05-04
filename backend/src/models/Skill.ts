import { Entity, PrimaryKey, Property } from "@mikro-orm/core"
import { Field, Int, ObjectType } from "type-graphql"

@Entity()
@ObjectType()
export class Skill {
    @PrimaryKey({ type: "int" })
    @Field(() => Int)
    id!: number

    @Property({ type: "text" })
    @Field(() => String)
    name!: string
}
