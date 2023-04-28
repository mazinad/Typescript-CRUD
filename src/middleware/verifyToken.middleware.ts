import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/helpers";

const verifyToken = (req:Request,res:Response,next:NextFunction) => {
    const token = req.header('auth-token');
    if(token){
        jwt.verify(token,JWT_SECRET,(err:any,decoded:any) => {
            if(err){
                res.status(400).json({error:err.message})
            }else{
                const now= Date.now()/1000;
                if(decoded.exp<now && decoded.exp){
                    return res.status(401).json({error:'Token expired'})
                }else{
                return next();
                }
            }
        })
    }else{
        res.status(401).json({error:'Access Denied'})
    }
}
export default verifyToken;