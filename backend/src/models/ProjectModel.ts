import { IProject } from "@/interfaces/Project"
import { neode } from "@/lib/neode"
import { RelationshipDirectionEnum } from "@bytebunker/neode"

export const ProjectModel = neode.model<IProject>("Project", {
    title: { type: "string", required: true },

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

    icon: { type: "string" },
    website: { type: "string" },
})
