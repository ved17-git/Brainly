"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "@/components/app-sidebar"
import { HeaderActions } from "@/components/header-actions"
import { ThemeToggle } from "@/components/theme-toggle"

function TitleFromPath() {
  const pathname = usePathname()
  const map: Record<string, string> = {
    "/dashboard": "All Notes",
    "/dashboard/twitter": "Tweets",
    "/dashboard/youtube": "youtube",
    "/dashboard/tags": "Tags",
  }
  let title = "Dashboard"
  for (const key of Object.keys(map)) {
    if (pathname === key) {
      title = map[key]
      break
    }
  }
  return <h1 className="text-xl font-semibold">{title}</h1>
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-4" />
              <TitleFromPath />
            </div>
            <div className="flex items-center gap-2">
              <HeaderActions />
              <ThemeToggle />
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
