import {fromUTF8ToBase64} from "../../src/globalMiddlewares/adminMiddleware";
import {SET} from "../../src/settings";
import {BlogInputModel} from "../../src/IOtypes/blogsTypes";


export const auth = {"Authorization": "Basic " + fromUTF8ToBase64(SET.ADMIN)}; // Получение base64 строки авторизации

export const corrBlog1: BlogInputModel = {
    name: "Василий",
    description: "Тёркин",
    websiteUrl: "https://_vas-i1.ter/k_/-i/4/"
} as const, corrBlog2: BlogInputModel = {
    name: "Максим",
    description: "Так так так",
    websiteUrl: "https://maksima.dva/teski"
} as const; // Правильные входные сетевые журналы

export function createBlog(n: string, d: string, w: string): BlogInputModel {
    return {
        name: n,
        description: d,
        websiteUrl: w
    };
} // Создание входного сетевого журнала

export function bigStr(n: number): string {
    var t: string = "";
    
    for(let i = 0; i < n; i++) t += String.fromCharCode(33 + (i < 94 ? i : i + 33));

    return t;
} // Создание строки с длиной n из символов юникода
