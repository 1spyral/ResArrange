import { Experience } from "@/api/experience/experience.entity"
import { GraphQLInt } from "graphql"
import { GraphQLDate } from "graphql-scalars"
import { Field, InputType } from "type-graphql"

@InputType()
export class CreateExperienceInput implements Partial<Experience> {
    @Field(() => String)
    company!: string

    @Field(() => String)
    title!: string

    @Field(() => String)
    location!: string

    @Field(() => GraphQLDate)
    startDate!: Date

    @Field(() => GraphQLDate, { nullable: true })
    endDate?: Date

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => [String])
    points!: string[]

    @Field(() => [GraphQLInt], { description: "Array of skill IDs" })
    skillIds!: number[]
}

@InputType()
export class UpdateExperienceInput implements Partial<Experience> {
    @Field(() => GraphQLInt)
    id!: number

    @Field(() => String, { nullable: true })
    company?: string

    @Field(() => String, { nullable: true })
    title?: string

    @Field(() => String, { nullable: true })
    location?: string

    @Field(() => GraphQLDate, { nullable: true })
    startDate?: Date

    @Field(() => GraphQLDate, { nullable: true })
    endDate?: Date

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => [String], { nullable: true })
    points?: string[]

    @Field(() => [GraphQLInt], {
        description: "Array of skill IDs",
        nullable: true
    })
    skillIds?: number[]
}
