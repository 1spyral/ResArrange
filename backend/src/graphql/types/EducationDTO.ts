import { Field, ObjectType } from "type-graphql"
import { SkillDTO } from "./SkillDTO"

@ObjectType("Education")
export class EducationDTO {
    @Field(() => String) institution!: string
    @Field(() => String) degree!: string
    @Field(() => String) location!: string
    @Field(() => String) startDate!: string
    @Field(() => String) endDate?: string
    @Field(() => String) description?: string

    @Field(() => [String])
    points?: string[]

    @Field(() => [String])
    courses?: string[]

    @Field(() => [SkillDTO])
    skills?: SkillDTO[]
}
