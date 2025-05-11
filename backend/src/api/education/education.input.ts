import { GraphQLInt } from "graphql"
import { GraphQLDate } from "graphql-scalars"
import { Education } from "."
import { Field, InputType } from "type-graphql"

@InputType()
export class CreateEducationInput implements Partial<Education> {
    @Field(() => String)
    institution!: string

    @Field(() => String)
    degree!: string

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

    @Field(() => [String])
    courses!: string[]

    @Field(() => [GraphQLInt], { description: "Array of skill IDs" })
    skillIds!: number[]
}

@InputType()
export class UpdateEducationInput implements Partial<Education> {
    @Field(() => GraphQLInt)
    id!: number

    @Field(() => String, { nullable: true })
    institution?: string

    @Field(() => String, { nullable: true })
    degree?: string

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

    @Field(() => [String], { nullable: true })
    courses?: string[]

    @Field(() => [GraphQLInt], {
        description: "Array of skill IDs",
        nullable: true
    })
    skillIds?: number[]
}
