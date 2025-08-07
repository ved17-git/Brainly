"use server"

export const loginForm=async(previousState:unknown, formData:FormData)=>{

 const email=formData.get("email")
 const password=formData.get("password")

 console.log(email,password);
 return {
    email,
    password
 }
}