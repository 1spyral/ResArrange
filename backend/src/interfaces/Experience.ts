import { ISkill } from "@/interfaces/Skill"

export interface IExperience extends NeodeModel {
    company: string
    title: string
    location: string

    startDate: Date
    endDate?: Date

    description?: string
    points: string[]

    skills: ISkill[]
}
