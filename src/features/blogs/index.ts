import express from "express";
import {getBlogsController} from "./controllers/getBlogsController";


export const blogsRout = express.Router();

blogsRout.get("/", getBlogsController);
