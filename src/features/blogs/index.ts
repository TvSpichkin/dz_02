import express from "express";
import {getBlogsController} from "./controllers/getBlogsController";
import {findBlogValidator} from "./middlewares/blogValidators";
import {findBlogController} from "./controllers/findBlogController";


export const blogsRout = express.Router(); // ���������� �������������� ������� ��������

blogsRout.get("/", getBlogsController); // ������� ���� ������� ��������
blogsRout.get("/:id", findBlogValidator, findBlogController); // ������� �������� ������� �� ��������������
