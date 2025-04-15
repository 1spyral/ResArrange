import { ISkill } from "@/models/Skill"

export interface IExperience {
    company: string
    title: string
    location: string

    startDate: Date
    endDate?: Date

    description?: string
    points: string[]

    skills?: ISkill[]
}