import express, {Request, Response} from "express";

export const app = express(); // Определение экспресс приложения


app.get("/", (запр: Request, отв: Response) => {
    отв.send("Servak rabotaet");
});
