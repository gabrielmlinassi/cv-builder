export type Rating = "excelent" | "advanced" | "intermediate" | "beginner"

export type Skill = { name: string; rating: Rating }

export const SKILLS: Skill[] = [
  {
    name: "Javascript / TypeScript",
    rating: "excelent",
  },
  {
    name: "React / Next.js",
    rating: "excelent",
  },
  {
    name: "Node / Express",
    rating: "advanced",
  },
  {
    name: "React Native",
    rating: "intermediate",
  },
  {
    name: "Shopify / WordPress / Strapi",
    rating: "advanced",
  },
]
