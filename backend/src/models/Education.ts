import { Skill } from "@/models/Skill"
import { User } from "@/models/User"
import {
    Collection,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryKey,
    Property,
} from "@mikro-orm/core"
import { GraphQLDate } from "graphql-scalars"
import { Field, Int, ObjectType } from "type-graphql"

@Entity()
@ObjectType()
export class Education {
    @PrimaryKey({ type: "int" })
    @Field(() => Int)
    id!: number

    @Property({ type: "text" })
    @Field(() => String)
    institution!: string

    @Property({ type: "text" })
    @Field(() => String)
    degree!: string

    @Property({ type: "text" })
    @Field(() => String)
    location!: string

    @Property({ type: "date" })
    @Field(() => GraphQLDate)
    startDate!: Date

    @Property({ type: "date", nullable: true })
    @Field(() => GraphQLDate, { nullable: true })
    endDate?: Date

    @Property({ type: "text", nullable: true })
    @Field(() => String, { nullable: true })
    description?: string

    @Property({ type: "text[]" })
    @Field(() => [String])
    points!: string[]

    @Property({ type: "text[]" })
    @Field(() => [String])
    courses!: string[]

    @ManyToOne(() => User)
    @Field(() => User)
    user!: User

    @ManyToMany(() => Skill, undefined, {
        owner: true,
        pivotTable: "education_skill",
    })
    @Field(() => [Skill])
    skills = new Collection<Skill>(this)
}
