import { Field, ObjectType } from "type-graphql"
import { SkillDTO } from "./SkillDTO"

@ObjectType("Education")
export class EducationDTO {
    @Field(() => String) institution!: string
    @Field(() => String) degree!: string
    @Field(() => String) location!: string
    @Field(() => String) startDate!: string
    @Field(() => String, { nullable: true }) endDate?: string
    @Field(() => String, { nullable: true }) description?: string

    @Field(() => [String], { nullable: true })
    points?: string[]

    @Field(() => [String], { nullable: true })
    courses?: string[]

    @Field(() => [SkillDTO], { nullable: true })
    skills?: SkillDTO[]
}
