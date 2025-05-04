import { Entity, PrimaryKey, Property } from "@mikro-orm/core"
import { Field, Int, ObjectType } from "type-graphql"

@Entity()
@ObjectType()
export class Skill {
    @PrimaryKey()
    @Field(() => Int)
    id: number = 0

    @Property({ type: "text" })
    @Field(() => String)
    name = ""
}
