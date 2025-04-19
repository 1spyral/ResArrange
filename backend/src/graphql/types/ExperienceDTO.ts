import { Field, ObjectType } from "type-graphql"
import { SkillDTO } from "./SkillDTO"

@ObjectType("Experience")
export class ExperienceDTO {
    @Field(() => String) company!: string
    @Field(() => String) position!: string
    @Field(() => String) location!: string
    @Field(() => String) startDate!: string
    @Field(() => String, { nullable: true }) endDate?: string
    @Field(() => String, { nullable: true }) description?: string

    @Field(() => [String], { nullable: true })
    points?: string[]

    @Field(() => [SkillDTO], { nullable: true })
    skills?: SkillDTO[]
}
