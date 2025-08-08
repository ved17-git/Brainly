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

interface contentType {
id:number,
link:string,
title:string
}

export default function DashboardGrid({ section, content}: { section: Section, content:contentType[] }) {
  const data = filter(section)

  console.log(content);
  

  return (
    <div className="px-4 pb-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.map((card) => (
          <Card key={card.id} className="border">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                {card.title}
                <div className="ml-auto flex items-center gap-3 text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                  <span className="sr-only">Card actions placeholder</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="">
                <iframe width="100%" height="315" src={card.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>


    </div>
  )
}
