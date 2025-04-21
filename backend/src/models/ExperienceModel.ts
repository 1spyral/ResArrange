import { IExperience } from "@/interfaces/Experience"
import { neode } from "@/lib/neode"
import { RelationshipDirectionEnum } from "@bytebunker/neode"

export const ExperienceModel = neode.model<IExperience>("Experience", {
    company: { type: "string", required: true },
    position: { type: "string", required: true },
    location: { type: "string", required: true },

    startDate: { type: "datetime", required: true },
    endDate: { type: "datetime" },

    description: { type: "string" },
    points: { type: "string" },

    skills: {
        type: "nodes",
        direction: RelationshipDirectionEnum.OUT,
        target: "Skill",
        relationship: "USES",
    },
})
