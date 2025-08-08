"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { deleteContent } from "@/app/dashboard/Content-Actions/action"
import { useActionState } from "react"


interface contentType {
  id: number
  link: string
  title: string
  type?: string
}

export default function DashboardGrid({
  content,
}: {
  content: contentType[]
}) {
  const [deleteId, setDeleteId] = useState<number | null>(null)

  const [data,deleteAction,isLoading]=useActionState(deleteContent,undefined)

  function convertYouTubeUrl(url: string) {
  try {
    const videoId = new URL(url).searchParams.get("v");
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url; // if it's already an embed link or invalid
  }
}



  return (
    <div className="px-4 pb-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content?.map((card) => (
          <Card key={card.id} className="border flex flex-col">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold">{card.title}</CardTitle>
                <CardDescription>Added content</CardDescription>
              </div>
              <div className="flex gap-2">

                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-red-100 hover:text-red-600"
                  onClick={() => setDeleteId(card.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <iframe
                width="100%"
                height="315"
                src={convertYouTubeUrl(card.link)}
                title={card.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>


            </CardContent>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <p>This action cannot be undone. The content will be permanently removed.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>
              Cancel
            </Button>
            <form action={deleteAction}>
            <Button variant="destructive">
              {isLoading? "Loading..." : "Delete"}
            </Button>
                <input
                id="id"
                name="id"
                hidden
                required
                value={deleteId !== null ? String(deleteId) : ""}
              />
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>


    </div>
  )
}



