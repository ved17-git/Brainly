import e, { Request, Response } from "express" 
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'

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

        const user=await db.user.create({
            data:{
                username:username,
                email:email,
                password:password
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

    console.log(email, password);
    

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
        }, "secret")

        if(user.password===password){
        res.status(200).json({
            msg:"logged In successfully",
            token
        })
        return
        }

    } catch (e) {
        res.status(400).json({
            msg:"api error"
        })
    }
}




export const logout=async(req:Request,res:Response)=>{

    try {
       console.log(req.body);
       
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

