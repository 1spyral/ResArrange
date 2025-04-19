import { Field, ObjectType } from "type-graphql"
import { SkillDTO } from "./SkillDTO"

@ObjectType("Experience")
export class ExperienceDTO {
    @Field(() => String) company!: string
    @Field(() => String) position!: string
    @Field(() => String) location!: string
    @Field(() => String) startDate!: string
    @Field(() => String) endDate?: string
    @Field(() => String) description?: string

    @Field(() => [String])
    points?: string[]

    @Field(() => [SkillDTO])
    skills?: SkillDTO[]
}
