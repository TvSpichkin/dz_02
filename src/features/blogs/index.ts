import express from "express";


export const rout = express.Router();

rout.get("/", getBlogsController);
