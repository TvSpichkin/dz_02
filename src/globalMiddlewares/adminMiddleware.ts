import {Request, Response, NextFunction} from "express";


export function adminMiddleware(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers["authorization"];

    if(!auth) res.sendStatus(401);
    else if(auth.slice(0, 6) !== "Basic ") res.sendStatus(401);

    next();
}
