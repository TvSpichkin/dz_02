import экспресс, {Request, Response} from "express";

export const app = экспресс(); // Определение экспресс приложения


app.get("/", (запр: Request, отв: Response) => {
    отв.send("Servak rabotaet");
});
