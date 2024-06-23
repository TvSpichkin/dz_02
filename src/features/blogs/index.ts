import express from "express";
import {getBlogsController} from "./controllers/getBlogsController";
import {findBlogValidator, blogValidators} from "./middlewares/blogValidators";
import {findBlogController} from "./controllers/findBlogController";


export const blogsRout = express.Router(); // Объявление маршрутизатора сетевых журналов

blogsRout.get("/", getBlogsController); // Возврат всех сетевых журналов
blogsRout.get("/:id", findBlogValidator, findBlogController); // Возврат сетевого журнала по идентификатору
blogsRout.post('/', ...blogValidators/*, createBlogController*/); // Создание сетевого журнала
