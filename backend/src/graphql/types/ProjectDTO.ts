import { Field, ObjectType } from "type-graphql"
import { SkillDTO } from "./SkillDTO"

@ObjectType("Project")
export class ProjectDTO {
    @Field(() => String) title!: string
    @Field(() => String) startDate!: string
    @Field(() => String, { nullable: true }) endDate?: string
    @Field(() => String, { nullable: true }) description?: string

    @Field(() => [String])
    points!: string[]

    @Field(() => [SkillDTO], { nullable: true })
    skills?: SkillDTO[]

    @Field(() => String, { nullable: true }) icon?: string
    @Field(() => String, { nullable: true }) website?: string
}
