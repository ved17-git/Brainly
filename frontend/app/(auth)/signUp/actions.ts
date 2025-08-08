"use server"
import { redirect } from "next/navigation"
export const signUpForm=async(previousState:unknown, formData:FormData)=>{

    const username=formData.get("username")
    const email=formData.get("email")
    const password=formData.get("password")

    console.log(username,email,password);


        const res= await fetch('http://localhost:8000/signUp', {
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