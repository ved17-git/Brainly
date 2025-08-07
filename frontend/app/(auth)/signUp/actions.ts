"use server"

export const signUpForm=async(previousState:unknown, formData:FormData)=>{

    const username=formData.get("username")
    const email=formData.get("email")
    const password=formData.get("password")

    console.log(username,email,password);
    

}