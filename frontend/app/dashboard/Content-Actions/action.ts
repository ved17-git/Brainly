"use server"
import { getToken } from "@/app/utils/getToken"
import { revalidateTag } from "next/cache"
export const addContent=async( previousState:unknown, formData:FormData)=>{

    const title=formData.get("title")
    const link=formData.get("link")
    const token=await getToken()

    console.log(title,link,token);
    
    

    const res=await fetch("http://localhost:8000/createContent",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({title,link})
    })
    const data=await res.json()
    console.log(data);
    

    if(!res.ok){
        return data.msg
    }

    revalidateTag('/dashboard')
}

export const deleteContent=async(previousState:unknown, formData:FormData)=>{

const id=formData.get("id") ?  Number(formData.get("id")) : null
const token=await getToken()

console.log(typeof id);


    const res=await fetch("http://localhost:8000/deleteContent",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({id})
    })
    const data=await res.json()
    console.log(data);
    

    if(!res.ok){
        return data.msg
    }
    
    revalidateTag('/dashboard')
}