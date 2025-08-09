"use client"
import {useState } from "react"
import { Plus,  } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addContent } from "@/app/dashboard/Content-Actions/action"
import { useActionState } from "react"



export function HeaderActions() {
  const [open, setOpen] = useState(false)
   
  const [data, formAction, isLoading]=useActionState(addContent,undefined)

  



  return (

    <div className="flex items-center gap-2">
      <Dialog open={open} onOpenChange={setOpen}>

        <DialogTrigger asChild>

          <Button>
            <Plus className="" /> Add Content
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add content</DialogTitle>
          </DialogHeader>
          <form action={formAction} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter a title" required name="title" />
            </div>
            <div className="grid gap-2">
              <Label>Type</Label>
              <Select  name="type">
                <SelectTrigger>
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="youtube">Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="grid gap-2">
              <Label htmlFor="link">Link</Label>
              <Input id="link" placeholder="Link" name="link" />
            </div>
            <DialogFooter>
              <Button type="submit">{isLoading ? "Loding...": "Save"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
