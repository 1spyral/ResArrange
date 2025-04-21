import { neode } from "@/lib/neode"
import { ISkill } from "@/interfaces/Skill"

export const SkillModel = neode.model<ISkill>("Skill", {
    name: { type: "string", required: true },

    categories: {
        type: "string",
    },
})
