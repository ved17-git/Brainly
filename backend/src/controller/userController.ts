import e, { Request, Response } from "express" 
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import z from "zod"

const db= new PrismaClient()


export const signUp=async(req:Request,res:Response)=>{
      


    const {username,email, password }=req.body

    if(!username || !password || !email){
        res.status(400).json({
            msg:"enter all details"
        })
        return
    }

    try {
       
        const existingUser = await db.user.findUnique({
            where:{
                email:email
            }
        })

        if(existingUser){
        res.status(400).json({
            msg:"email already exists"
        })
        return
        }

        const hash=await bcrypt.hash(password,10)

        const user=await db.user.create({
            data:{
                username:username,
                email:email,
                password:hash
            }
        })

        if(user){
        res.status(200).json({
            msg:"user created successfully"
        })
        return
        }

        
    } catch (e) {
        res.status(400).json({
            msg:"api error"
        })
    }
}



export const signIn=async(req:Request,res:Response)=>{

    const {email, password }=req.body

    

    if(!password || !email){
        res.status(400).json({
            msg:"enter all details"
        })
        return
    }

    try {
       
        const user = await db.user.findUnique({
            where:{
                email:email
            }
        })

        if(!user){
        res.status(400).json({
            msg:"user not found"
        })
        return
        }
        
        const token= jwt.sign({
            id:user.id,
            username:user.username,
        }, process.env.JWT_SECRET as string)

        const check=await bcrypt.compare(password, user.password)

        if(check){
        res.status(200).json({
            msg:"logged In successfully",
            token
        })
        return
        }else{
            res.status(400).json({
            msg:"incorrect password",
        })
        return

        }

    } catch (e) {
        res.status(400).json({
            msg:"api error"
        })
    }
}



export const currentUser=async(req:Request,res:Response)=>{

    try {
       
        const user = await db.user.findFirst({
            where:{
                //@ts-ignore
                id:req.userId
            }
        })

        if(!user){
        res.status(400).json({
            msg:"user not found"
        })
        return
        }

        res.status(200).json({
            msg:"user",
            user:{
                id:user.id,
                username:user.username,
                email:user.email
            }
        })
        return
        

    } catch (e) {
        res.status(400).json({
            msg:"api error"
        })
    }

}




export const logout=async(req:Request,res:Response)=>{

    try {
       
        res.status(200).json({
            msg:"logged out successfully"
        })
        return

    } catch (e) {
        res.status(400).json({
            msg:"api error"
        })
    }
}

