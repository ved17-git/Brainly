"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Section = "all" | "twitter" | "videos"  | "tags"

const ITEMS = [
  {
    id: 1,
    section: "documents" as const,
    title: "Project Ideas",
    subtitle: "Future Projects",
    bullets: [
      "Build a personal knowledge base",
      "Create a habit tracker",
      "Design a minimalist todo app",
    ],
    tags: ["productivity", "ideas"],
    added: "10/03/2024",
  },
  {
    id: 2,
    section: "videos" as const,
    title: "How to Build a Second Brain",
    image: "/video-thumbnail-gray-placeholder.png",
    tags: ["productivity", "learning"],
    added: "09/03/2024",
  },
  {
    id: 3,
    section: "tweets" as const,
    title: "Productivity Tip",
    excerpt:
      "The best way to learn is to build in public. Share your progress, get feedback, and help others along the way.",
    tags: ["productivity", "learning"],
    added: "08/03/2024",
  },
]

function filter(section: Section) {
  if (section === "all") return ITEMS
  return ITEMS.filter((i) => i.section === section)
}

export default function DashboardGrid({ section }: { section: Section }) {
  const data = filter(section)

  return (
    <div className="px-4 pb-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {data.map((card) => (
          <Card key={card.id} className="border">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                {card.title}
                <div className="ml-auto flex items-center gap-3 text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                  <span className="sr-only">Card actions placeholder</span>
                </div>
              </CardDescription>
              {card.subtitle ? (
                <CardTitle className="text-2xl">{card.subtitle}</CardTitle>
              ) : null}
            </CardHeader>
            <CardContent className="space-y-3">
              {"bullets" in card ? (
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {card.bullets!.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground">{card.excerpt}</p>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {card.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">
                    #{t}
                  </Badge>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">Added on {card.added}</div>
            </CardContent>
          </Card>
        ))}
      </div>


    </div>
  )
}
