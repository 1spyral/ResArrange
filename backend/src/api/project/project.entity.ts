import { Skill } from "@/api/skill"
import { User } from "@/api/user"
import {
    Collection,
    Entity,
    Enum,
    ManyToMany,
    ManyToOne,
    PrimaryKey,
    Property
} from "@mikro-orm/core"
import { GraphQLDate } from "graphql-scalars"
import { Field, Int, ObjectType, registerEnumType } from "type-graphql"

@Entity()
@ObjectType()
export class Project {
    @PrimaryKey({ type: "int" })
    @Field(() => Int)
    id!: number

    @Property({ type: "text" })
    @Field(() => String)
    title!: string

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

    @Enum({ items: () => ProjectIconType, nullable: true })
    @Field(() => ProjectIconType, { nullable: true })
    icon?: ProjectIconType

    @Property({ type: "text", nullable: true })
    @Field(() => String, { nullable: true })
    website?: string

    @ManyToOne(() => User)
    @Field(() => User)
    user!: User

    @ManyToMany(() => Skill, undefined, {
        owner: true,
        pivotTable: "project_skill"
    })
    @Field(() => [Skill])
    skills = new Collection<Skill>(this)
}

export enum ProjectIconType {
    GITHUB = "github"
}

registerEnumType(ProjectIconType, { name: "ProjectIconType" })
