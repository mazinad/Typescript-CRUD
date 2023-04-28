import { Request, Response } from "express";
import * as categoryService from "../services/category.service";

export async function getAllCategories(req: Request, res: Response) {
    try {
        const categories = await categoryService.getCategories();
        res.status(200).json(categories);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function createCategory(req: Request, res: Response) {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}