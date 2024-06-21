import {Request, Response} from "express";
import {BlogViewModel} from "../../../IOtypes/blogsTypes";
import {blogsRep} from "../blogsRep";


export function findBlogController(req: Request<{id: string}>, res: Response<BlogViewModel>) {
    // @ts-ignore
    res.json(res.find); // Получение искомого сетевого журнала
}; // Контролёр, отвечающий за выдачу искомого сетевого журнала