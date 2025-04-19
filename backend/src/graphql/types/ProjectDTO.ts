import { Field, ObjectType } from "type-graphql"
import { SkillDTO } from "./SkillDTO"

@ObjectType("Project")
export class ProjectDTO {
    @Field(() => String) title!: string
    @Field(() => String) startDate!: string
    @Field(() => String) endDate?: string
    @Field(() => String) description?: string

    @Field(() => [String])
    points!: string[]

    @Field(() => [SkillDTO])
    skills?: SkillDTO[]

    @Field(() => String) icon?: string
    @Field(() => String) website?: string
}
