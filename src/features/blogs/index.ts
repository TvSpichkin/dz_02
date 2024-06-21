import express from "express";
import {getBlogsController} from "./controllers/getBlogsController";


export const blogsRout = express.Router(); // Объявление маршрутизатора сетевых журналов

blogsRout.get("/", getBlogsController); // Возврат всех сетевых журналов
