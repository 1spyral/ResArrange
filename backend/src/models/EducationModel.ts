import { IEducation } from "@/interfaces/Education"
import { neode } from "@/lib/neode"
import { RelationshipDirectionEnum } from "@bytebunker/neode"

export const EducationModel = neode.model<IEducation>("Education", {
    institution: { type: "string", required: true },
    degree: { type: "string", required: true },
    location: { type: "string", required: true },

    startDate: { type: "date", required: true },
    endDate: { type: "date" },

    description: { type: "string" },
    points: { type: "string" },

    courses: { type: "string" },
    skills: {
        type: "nodes",
        direction: RelationshipDirectionEnum.OUT,
        target: "Skill",
        relationship: "USES",
    },
})
