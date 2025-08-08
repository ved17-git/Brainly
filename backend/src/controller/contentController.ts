    import { Request,Response } from "express"
    import { PrismaClient } from "@prisma/client"

    const db=new PrismaClient()
    export const createContent=async(req:Request,res:Response)=>{

    const {title, link} =req.body
    //@ts-ignore
    const id=req.userId

    console.log(title, link, id);
    

    try {

    const content=await db.content.create({
        data:{
            title:title,
            link:link,
            userId:id
        },
    })

    if(!content){
        res.status(400).json({
            msg:"content creation error",
        })
        return
    }

    res.status(200).json({
            msg:"content created",
            content
        })
    return

        
    } catch (e) {
        console.log(e); 
    res.status(400).json({
            msg:"api error"
        })
    return
        
    }

}




export const allContent=async(req:Request,res:Response)=>{


    try {

    const content=await db.content.findMany({
        where:{
            //@ts-ignore
            userId:req.userId
        }
    })

    if(!content){
        res.status(400).json({
            msg:"No content found"
        })
        return
    }

    res.status(200).json({
            msg:"All content",
            content
        })
    return

        
    } catch (e) {
    res.status(400).json({
            msg:"api error"
        })
    return
        
    }
}




export const deleteContent=async(req:Request,res:Response)=>{
   
    const {id}=req.body
    
    try {

    const content=await db.content.delete({
        where:{
            id:id,
            //@ts-ignore
        }
    })

    if(!content){
        res.status(400).json({
            msg:"No content found"
        })
        return
    }

    res.status(200).json({
            msg:"deleted successfully",
        })
    return

        
    } catch (e) {
        console.log(e);
    res.status(400).json({
            msg:"api error"
        })
    return
        
    }

}




