import {fromUTF8ToBase64} from "../../src/globalMiddlewares/adminMiddleware";
import {agent} from "supertest";
import {app} from "../../src/app";
import {SET} from "../../src/settings";


export const codedAuth = fromUTF8ToBase64(SET.ADMIN), // Получение base64 строки авторизации
    req = agent(app), // Определение запроса для тестирования программы
    getBlog = req.get(SET.PATH.BLOGS), // Запрос на получение всех сетевых журналов
    postBlog = req.post(SET.PATH.BLOGS).set({"Authorization": "Basic " + codedAuth}); // Запрос на создание сетевого журнала
