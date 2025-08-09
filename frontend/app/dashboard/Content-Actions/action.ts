"use server"
import { getToken } from "@/app/utils/getToken"
import { revalidateTag } from "next/cache"
export const addContent=async( previousState:unknown, formData:FormData)=>{

    const title=formData.get("title")
    const link=formData.get("link")
    const type=formData.get("type")
    const token=await getToken()

    
    

    const res=await fetch("http://localhost:8000/createContent",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({title,link, type})
    })
    const data=await res.json()
    

    if(!res.ok){
        return data.msg
    }

    revalidateTag('/dashboard')
}

export const deleteContent=async(previousState:unknown, formData:FormData)=>{

const id=formData.get("id") ?  Number(formData.get("id")) : null
const token=await getToken()



    const res=await fetch("http://localhost:8000/deleteContent",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({id})
    })
    const data=await res.json()
    

    if(!res.ok){
        return data.msg
    }
    
    revalidateTag('/dashboard')
}


export const shareLink=async()=>{


    const share=true;
    const token=await getToken()

    const res=await fetch("http://localhost:8000/share",{
    method:"POST",
    headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
    },
    body:JSON.stringify({share})
    })

    
    const data=await res.json()
    
    const sharedLink="http://localhost:3000/share/"+data.url
    console.log(sharedLink);
    
    if(!res.ok){
        return data.msg
    }
    
    revalidateTag('/dashboard')


}