"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const logout = async () => {
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
  console.log(data)

  if (!res.ok) {
    return { msg: data.msg || "Logout failed" }
  }

  cookieStore.delete("token")
  redirect("/")
}
