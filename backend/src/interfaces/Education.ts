export interface IEducation {
    institution: string
    degree: string
    location: string

    startDate: Date
    endDate?: Date

    description?: string
    points?: string[]

    courses?: string[]
    skills?: string[]
}