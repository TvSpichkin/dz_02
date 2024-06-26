import express, {Request, Response} from "express";
import {SET} from "./settings";
import {blogsRout} from "./features/blogs";

export const app = express(); // Определение экспресс приложения
app.use(express.json()) // Cоздание свойств-объектов тела и вопросов во всех запросах


app.get("/", (запр: Request, отв: Response) => {
    //console.log("pass = '" + SET.ADMIN + "'");
    отв.send("Servak rabotaet");
}); // Проверка успешного запуска сервера

app.use(SET.PATH.BLOGS, blogsRout) // Подключение маршрутизатора сетевых журналов
