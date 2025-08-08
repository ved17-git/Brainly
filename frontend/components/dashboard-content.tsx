import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Channel = "all" | "twitter" | "youtube"

const ITEMS = [
  { id: 1, channel: "twitter" as const, title: "Tweet Performance", desc: "Engagement this week", metric: "2.4k" },
  { id: 2, channel: "twitter" as const, title: "Follower Growth", desc: "Last 30 days", metric: "+1.2k" },
  { id: 3, channel: "youtube" as const, title: "Views", desc: "Past 7 days", metric: "48k" },
  { id: 4, channel: "youtube" as const, title: "Watch Time", desc: "Hours this month", metric: "3.1k h" },
]

function getItems(channel: Channel) {
  if (channel === "all") return ITEMS
  return ITEMS.filter((i) => i.channel === channel)
}

export default function DashboardContent({ channel }: { channel: Channel }) {
  const data = getItems(channel)

  return (
    <div className="flex-1 p-4">

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((card) => (
          <Card key={card.id} className="border">
            <CardHeader className="pb-2">
              <CardDescription className="capitalize">{card.channel}</CardDescription>
              <CardTitle className="text-3xl">{card.metric}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-medium">{card.title}</div>
              <div className="text-sm text-muted-foreground">{card.desc}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
