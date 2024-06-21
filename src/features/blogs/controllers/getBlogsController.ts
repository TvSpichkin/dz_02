import {Request, Response} from "express";
import {BlogViewModel} from "../../../IOtypes/blogsTypes";
import {blogsRep} from "../blogsRep";


export function getBlogsController(запр: Request, отв: Response<BlogViewModel[]>) {
    отв.json(blogsRep.getAll()); // Получение сетевых журналов
}; // Контролёр, отвечающий за выдачу сетевых журналов
