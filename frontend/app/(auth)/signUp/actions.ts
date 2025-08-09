"use server"
import { BASE_URL } from "@/app/utils/config"
import { redirect } from "next/navigation"
export const signUpForm=async(previousState:unknown, formData:FormData)=>{

    const username=formData.get("username")
    const email=formData.get("email")
    const password=formData.get("password")



        const res= await fetch(`${BASE_URL}/signUp`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username, email, password})
        })
        const data=await res.json()

        if(!res.ok){
            return data.msg
        }

     

    redirect('/login')


}