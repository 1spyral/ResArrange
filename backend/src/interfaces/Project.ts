import { ISkill } from "@/interfaces/Skill"

export interface IProject extends NeodeModel {
    title: string

    startDate: Date
    endDate?: Date

    description?: string
    points: string[]

    skills: ISkill[]

    icon?: "github"
    website?: string
}
