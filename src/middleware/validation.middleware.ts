import {Response,Request,NextFunction} from 'express';
import { Schema } from 'joi';

export const validate = (schema:Schema) =>(req:Request,res:Response,next:NextFunction)=>{
    try{
            const {error} = schema.validate(req.body);
            if(error){
                return res.status(400).json({error:error.message});
            }
            return next();
        } catch(error){
        console.log(error);
    }
}