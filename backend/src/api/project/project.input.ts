import { Project } from "@/api/project/project.entity"
import { GraphQLInt } from "graphql"
import { GraphQLDate } from "graphql-scalars"
import { Field, InputType } from "type-graphql"

@InputType()
export class CreateProjectInput implements Partial<Project> {
    @Field(() => String)
    title!: string

    @Field(() => GraphQLDate)
    startDate!: Date

    @Field(() => GraphQLDate, { nullable: true })
    endDate?: Date

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => [String])
    points!: string[]

    @Field(() => String, { nullable: true })
    website?: string

    @Field(() => [GraphQLInt], { description: "Array of skill IDs" })
    skillIds!: number[]
}

@InputType()
export class UpdateProjectInput implements Partial<Project> {
    @Field(() => GraphQLInt)
    id!: number

    @Field(() => String, { nullable: true })
    title?: string

    @Field(() => GraphQLDate, { nullable: true })
    startDate?: Date

    @Field(() => GraphQLDate, { nullable: true })
    endDate?: Date

    @Field(() => String, { nullable: true })
    description?: string

    @Field(() => [String], { nullable: true })
    points?: string[]

    @Field(() => String, { nullable: true })
    website?: string

    @Field(() => [GraphQLInt], {
        description: "Array of skill IDs",
        nullable: true
    })
    skillIds?: number[]
}
