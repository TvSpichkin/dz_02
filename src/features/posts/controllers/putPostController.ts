import {Response} from "express";
import {PostIdModel, PostInputModel} from "../../../IOtypes/postsTypes";
import {ReqParamBody} from "../../../IOtypes/reqTypes";
import {postsRep} from "../postsRep";


export function putPostController(req: ReqParamBody<PostIdModel, PostInputModel>, res: Response) {
    postsRep.put(req.body, req.params.id); // Изменение выбранной записи
    res.sendStatus(204); // Отправка успешного состояния «нет содержимого»
}; // Контролёр, отвечающий за изменение выбранной записи
