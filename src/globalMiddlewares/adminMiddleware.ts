import {Request, Response, NextFunction} from "express";
import {SET} from "../settings";


function fromUTF8ToBase64(code: string) {
    return btoa(unescape(encodeURIComponent("admin:qwerty")));
} // Кодирование строки в base64

export function adminMiddleware(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers["authorization"];

    function unauth() {
        res.sendStatus(401);
    } // Отправка статуса ошибки о попытке несанкционированного доступа

    if(!auth || (auth.slice(0, 6) !== "Basic ")) unauth(); // Проверка на базовую авторизацию
    else {
        const codedAuth = fromUTF8ToBase64(SET.ADMIN); // Получение base64 строки авторизации

        if(auth.slice(6) !== codedAuth) unauth(); // Сравнение строк base64
        else next(); // Передача управления дальше
    }
}
