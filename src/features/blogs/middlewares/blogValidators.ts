import {Request, Response, NextFunction} from "express";
import {body} from "express-validator";
import {blogsRep} from "../blogsRep";
import {adminMiddleware} from "../../../globalMiddlewares/adminMiddleware";


const descriptionValidator = body("description");

export function findBlogValidator(req: Request<{id: string}>, res: Response, next: NextFunction) {
    const findBlog = blogsRep.find(req.params.id); // Поиск сетевого журнала
    if(!findBlog) res.sendStatus(404); // Если не найдено, то возрат 404 статуса
    else {
        // @ts-ignore
        res.find = blogsRep.maper(findBlog); // Иначе - переброс найденного сетевого журнала в запрос
        next(); // И передача управления дальше
    }
} // Проверка существования искомого сетевого журнала

export const blogValidators = [
    adminMiddleware,

    // nameValidator,
    descriptionValidator,
    //websiteUrlValidator,

    //inputCheckErrorsMiddleware,
]; // Набор проверок для создания и изменения сетевых журналов
