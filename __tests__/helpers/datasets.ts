import {agent} from "supertest";
import {fromUTF8ToBase64} from "../../src/globalMiddlewares/adminMiddleware";
import {SET} from "../../src/settings";
import {app} from "../../src/app";
import {BlogInputModel} from "../../src/IOtypes/blogsTypes";


export const codedAuth = fromUTF8ToBase64(SET.ADMIN); // Получение base64 строки авторизации

export const corrBlog1: BlogInputModel = {
    name: 'Василий',
    description: 'Тёркин',
    websiteUrl: 'https://_vas-i1.ter/k_/-i/4/'
} as const; // Правильный входной сетевой журнал

export function createBlog(n: string, d: string, w: string): BlogInputModel {
    return {
        name: n,
        description: d,
        websiteUrl: w
    };
} // Создание входного сетевого журнала
