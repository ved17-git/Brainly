"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
export const loginForm=async(previousState:unknown, formData:FormData)=>{

 const email=formData.get("email")
 const password=formData.get("password")

 console.log(email,password);

         const res= await fetch('http://localhost:8000/signIn', {
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