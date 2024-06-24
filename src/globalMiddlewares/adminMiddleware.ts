import {Request, Response, NextFunction} from "express";
import {SET} from "../settings";


function fromUTF8ToBase64(code: string) {
    return btoa(unescape(encodeURIComponent("admin:qwerty")));
} // ����������� ������ � base64

export function adminMiddleware(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers["authorization"];

    function unauth() {
        res.sendStatus(401);
    } // �������� ������� ������ � ������� �������������������� �������

    if(!auth || (auth.slice(0, 6) !== "Basic ")) unauth(); // �������� �� ������� �����������
    else {
        const codedAuth = fromUTF8ToBase64(SET.ADMIN); // ��������� base64 ������ �����������

        if(auth.slice(6) !== codedAuth) unauth(); // ��������� ����� base64
        else next(); // �������� ���������� ������
    }
}
