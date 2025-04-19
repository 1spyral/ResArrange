import { Field, ObjectType } from "type-graphql"
import { SkillDTO } from "./SkillDTO"
import { EducationDTO } from "./EducationDTO"
import { ExperienceDTO } from "./ExperienceDTO"
import { ProjectDTO } from "./ProjectDTO"

@ObjectType("User")
export class UserDTO {
    @Field(() => String) id!: string
    @Field(() => String) name!: string
    @Field(() => String, { nullable: true }) phone?: string
    @Field(() => String, { nullable: true }) email?: string
    @Field(() => String, { nullable: true }) linkedin?: string
    @Field(() => String, { nullable: true }) github?: string
    @Field(() => String, { nullable: true }) website?: string
    @Field(() => String, { nullable: true }) location?: string

    @Field(() => [EducationDTO])
    education!: EducationDTO[]

    @Field(() => [ExperienceDTO])
    experience!: ExperienceDTO[]

    @Field(() => [ProjectDTO])
    projects!: ProjectDTO[]

    @Field(() => [SkillDTO])
    skills!: SkillDTO[]
}
