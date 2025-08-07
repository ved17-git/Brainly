import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import { JwtPayload } from "jsonwebtoken"

export const middleware=(req:Request,res:Response,next:NextFunction):any=>{

    const authHeader = req.headers.authorization
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.json({
            msg:"token not found"
        })
        return
    }

    const token=authHeader.split(' ')[1]
   
    try {

const decoded=jwt.verify(token, "secret")


if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
(req as any).userId = (decoded as JwtPayload).id;
 next()
}

        
    } catch (e) {
        res.json({
            msg:"middleware error"
        })
    }



    
}