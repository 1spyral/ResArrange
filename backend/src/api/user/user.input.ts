import { User } from "."
import { Field, InputType } from "type-graphql"

@InputType()
export class UpdateUserInput implements Partial<User> {
    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    phone?: string

    @Field(() => String, { nullable: true })
    linkedin?: string

    @Field(() => String, { nullable: true })
    github?: string

    @Field(() => String, { nullable: true })
    website?: string

    @Field(() => String, { nullable: true })
    location?: string
}
