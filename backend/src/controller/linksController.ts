import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { randomURL } from "../utils/generateURL"

const db=new PrismaClient()

export const share=async (req:Request,res:Response)=>{

    const {share}=req.body

    try {
        
    const existingLink=await db.links.findFirst({
        where:{
            //@ts-ignore
            userId:req.userId,
        }
    })

    if(existingLink){
        res.status(200).json({
            msg:"url",
            url:existingLink.url
        })
        return
    }

    const url=randomURL()


    const newUrl=await db.links.create({
        data:{
            url:url,
            //@ts-ignore
            userId:req.userId
        }
    })

    
    if(newUrl){
        res.status(200).json({
            msg:"url",
            url:url
        })
        return
    }
        
    } catch (e) {
        console.log(e);
        res.status(400).json({
            msg:"api error"
        })
        
    }
   

}






export const shareLink=async (req:Request,res:Response)=>{

    try {
    
    const shareLink=req.params.shareLink
    
    const linkData=await db.links.findFirst({
        where:{
            //@ts-ignore
            url:shareLink
        }
    })
    if(!linkData){
        res.status(400).json({
            msg:"url not found"
        })
        return
    }

    const data=await db.user.findFirst({
        where:{
            id:linkData?.userId
        },
        include:{
            content:true
        }
    })

    if(!data){
        res.status(400).json({
            msg:"shared link data not found"
        })
        return
    }

    res.status(200).json({
    msg:"data",
    data:{
        id:data.id,
        username:data.username,
        content:data.content
    }
    })
    return

        
    } 
    catch (e) {
        console.log(e);
        res.status(400).json({
            msg:"api error"
        })
        
    }
   

}