import { IUser } from "@/interfaces/User"
import { neode } from "@/lib/neode"
import {
    RelationshipCascadePolicyEnum,
    RelationshipDirectionEnum,
} from "@bytebunker/neode"

export const UserModel = neode.model<IUser>("User", {
    name: { type: "string", required: true },

    phone: { type: "string" },
    email: { type: "string", email: true },
    linkedin: { type: "string" },
    github: { type: "string" },
    website: { type: "string" },
    location: { type: "string" },

    education: {
        type: "nodes",
        direction: RelationshipDirectionEnum.OUT,
        target: "Education",
        relationship: "OWNS",
        cascade: RelationshipCascadePolicyEnum.DELETE,
    },
    experience: {
        type: "nodes",
        direction: RelationshipDirectionEnum.OUT,
        target: "Experience",
        relationship: "OWNS",
        cascade: RelationshipCascadePolicyEnum.DELETE,
    },
    projects: {
        type: "nodes",
        direction: RelationshipDirectionEnum.OUT,
        target: "Project",
        relationship: "OWNS",
        cascade: RelationshipCascadePolicyEnum.DELETE,
    },
    skills: {
        type: "nodes",
        direction: RelationshipDirectionEnum.OUT,
        target: "Skill",
        relationship: "HAS",
    },
})
