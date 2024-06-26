import {Response} from "express";
import {BlogViewModel} from "../../../IOtypes/blogsTypes";
import {ReqParam} from "../../../IOtypes/reqTypes";


export function findBlogController(req: ReqParam<{id: string}>, res: Response<BlogViewModel>) {
    // @ts-ignore
    res.json(res.find); // Получение искомого сетевого журнала
}; // Контролёр, отвечающий за выдачу искомого сетевого журнала
