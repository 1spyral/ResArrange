import { Education } from "@/models/Education"
import { Experience } from "@/models/Experience"
import { Project } from "@/models/Project"
import { Skill } from "@/models/Skill"
import {
    Collection,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core"
import { Field, Int, ObjectType } from "type-graphql"

@Entity()
@ObjectType()
export class User {
    @PrimaryKey()
    @Field(() => Int)
    id: number = 0

    @Property({ type: "text" })
    @Field(() => String)
    name!: string

    @Property({ type: "text", nullable: true })
    @Field(() => String, { nullable: true })
    phone?: string

    @Property({ type: "text", unique: true })
    @Field(() => String, { nullable: true })
    email!: string

    @Property({ type: "text", nullable: true })
    @Field(() => String, { nullable: true })
    linkedin?: string

    @Property({ type: "text", nullable: true })
    @Field(() => String, { nullable: true })
    github?: string

    @Property({ type: "text", nullable: true })
    @Field(() => String, { nullable: true })
    website?: string

    @Property({ type: "text", nullable: true })
    @Field(() => String, { nullable: true })
    location?: string

    @OneToMany(() => Education, "user")
    @Field(() => [Education])
    educations = new Collection<Education>(this)

    @OneToMany(() => Experience, "user")
    @Field(() => [Experience])
    experiences = new Collection<Experience>(this)

    @OneToMany(() => Project, "user")
    @Field(() => [Project])
    projects = new Collection<Project>(this)

    @ManyToMany(() => Skill, undefined, {
        owner: true,
        pivotTable: "user_skill",
    })
    @Field(() => [Skill])
    skills = new Collection<Skill>(this)
}
