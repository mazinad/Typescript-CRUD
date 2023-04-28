import { Request, Response } from 'express';
import * as userService from '../services/users.service';
import { IUser } from '../interface/user.types';
import {generateToken }from '../utils/helpers';
export async function getAllUsers(req: Request, res: Response) {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
export async function getUser(req: Request, res: Response) {
    try {
        const user = await userService.getUser(req.params.email);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
export async function createUser(req: Request, res: Response) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
export async function authenticateUser(req: Request, res: Response) {
    const data:IUser= req.body;
    try {
        const user = await userService.getUser(data.email);
        if(user){
            const payload={id:user._id,role:user.role,email:user.email};
            const token = await generateToken(payload);
            return res.status(200).json({message:'User authenticated',data:payload,token:token});
}
            res.status(401).json({message:'Invalid Email'});
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

