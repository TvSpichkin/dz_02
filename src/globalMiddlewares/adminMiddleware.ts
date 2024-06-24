import {Request, Response, NextFunction} from "express";


export function adminMiddleware(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers["authorization"];

    function unauth() {
        res.sendStatus(401);
    }

    if(!auth || (auth.slice(0, 6) !== "Basic ")) unauth();
    else if(auth.slice(0, 6) !== "Basic ") res.sendStatus(401);

    next();
}
