"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const logout = async ():Promise<void>=> {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  const res = await fetch("http://localhost:8000/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  })

  const data = await res.json()

  if (!res.ok) {
    return
  }

  cookieStore.delete("token")
  redirect("/")
}
