

import React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getToken } from "../utils/getToken"
import { logout } from "../(auth)/logout/actions"
import { BASE_URL } from "../utils/config"

export default async function Profile() {
  const token=await getToken()
     
  const res=await fetch(`${BASE_URL}/currentUser`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
    }
  })

  if(!res.ok){
    return "user not found"
  }
  const data=await res.json()
  



  return (
    <div className="flex justify-center mt-10">
      <Card className="w-[350px] shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="img" />
            <AvatarFallback>{"https://github.com/shadcn.png"}</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4">{data.user.username}</CardTitle>
          <p className="text-sm text-muted-foreground">{data.user.email}</p>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm text-muted-foreground">
            Welcome back! Here’s your profile information.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">

        <form action={logout}>
          <Button variant="destructive" >
            Logout
          </Button>
        </form>
        </CardFooter>
      </Card>
    </div>
  )
}
