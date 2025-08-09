"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { BASE_URL } from "@/app/utils/config"
export const loginForm=async(previousState:unknown, formData:FormData)=>{

 const email=formData.get("email")
 const password=formData.get("password")


         const res= await fetch(`${BASE_URL}/signIn`, {
             method:"POST",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({email, password})
         })
         const data=await res.json()
 
         if(!res.ok){
             return data.msg
         }

         const cookieStore=await cookies()
         cookieStore.set("token",data.token,{
            httpOnly:true,
            maxAge:60*60*24
         })
 
     redirect('/')

}