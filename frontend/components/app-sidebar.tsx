"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Twitter, Youtube, Tag, Brain } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/app/(auth)/logout/actions"
import { useActionState } from "react"


const nav = [
  { title: "Twitter", href: "/dashboard/twitter", icon: Twitter },
  { title: "Youtube", href: "/dashboard/youtube", icon: Youtube },
  { title: "Tags", href: "/dashboard/tags", icon: Tag },
]



export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

   const [data,formAction, isLoading] = useActionState(logout, undefined)


  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <div className="flex items-center gap-2 px-3 py-4">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Brain className="h-4 w-4" />
          </div>
          <span className="font-semibold group-data-[collapsible=icon]:hidden">Second Brain</span>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* "All" is at /dashboard */}
              <SidebarMenuItem key="all">
                <SidebarMenuButton asChild isActive={pathname === "/dashboard"} tooltip="All">
                  <Link href="/dashboard">
                    <Tag className="h-4 w-4" />
                    <span>All</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {nav.map((item) => {
                const isActive =
                  item.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname?.startsWith(item.href)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={!!isActive} tooltip={item.title}>
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex w-full items-center gap-3 rounded-md p-2 text-left hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  aria-label="Open profile menu"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarFallback className="rounded-lg">SB</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-medium">Alex Johnson</span>
                    <span className="truncate text-xs text-muted-foreground">alex@example.com</span>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-lg">
                <DropdownMenuLabel className="font-medium">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                 <form action={formAction}>
                  <DropdownMenuItem asChild>
                    <button type="submit" className="w-full text-left">
                     {isLoading? "Loading...":"Log out"}
                    </button>
                  </DropdownMenuItem>
                </form>
                
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
