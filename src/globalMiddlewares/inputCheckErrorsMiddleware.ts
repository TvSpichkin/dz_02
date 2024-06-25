import {Request, Response, NextFunction} from "express";
import {validationResult} from "express-validator";
import {APIErrorResult, FieldNamesType} from "../IOtypes/outputErrorsType";


export function inputCheckErrorsMiddleware(req: Request, res: Response<APIErrorResult>, next: NextFunction) {
    const Errors = validationResult(req); // ��������� ������ ����� ������

    if(!Errors.isEmpty()) {
        const arrE = Errors.array({onlyFirstError: true}) as {msg: string, path: FieldNamesType}[]; // �������� ������� ������

        res.status(400).json({
            errorsMessages: arrE.map(e => ({message: e.msg, field: e.path}))
        }); // �������� ������ ����� ������
    } else next(); // �������� ���������� ������
}
