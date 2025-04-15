import { ISkill } from "@/interfaces/Skill"

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