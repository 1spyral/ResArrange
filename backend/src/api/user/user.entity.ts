import { Education } from "@/api/common/education.entity"
import { Experience } from "@/api/common/experience.entity"
import { Project } from "@/api/common/project.entity"
import { Skill } from "@/api/common/skill.entity"
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
    @PrimaryKey({ type: "int" })
    @Field(() => Int)
    id!: number

    @Property({ type: "text", nullable: true })
    @Field(() => String, { nullable: true })
    name?: string

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
