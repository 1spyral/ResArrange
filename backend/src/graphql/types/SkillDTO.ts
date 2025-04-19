import { Field, ObjectType } from "type-graphql"

@ObjectType("Skill")
export class SkillDTO {
    @Field(() => String) name!: string

    @Field(() => [String])
    categories!: string[]
}
