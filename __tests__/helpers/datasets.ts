import {fromUTF8ToBase64} from "../../src/globalMiddlewares/adminMiddleware";
import {SET} from "../../src/settings";
import {BlogInputModel} from "../../src/IOtypes/blogsTypes";


export const auth = {"Authorization": "Basic " + fromUTF8ToBase64(SET.ADMIN)}; // Получение base64 строки авторизации

export const corrBlog1 = createBlog("Василий", "Тёркин", "https://_vas-i1.ter/k_/-i/4/"),
    corrBlog2 = createBlog("Максим", "Так так так", "https://maksima.dva/teski"),
    corrBlog3 = createBlog(bigStr(15), bigStr(500), "https://te.st"); // Правильные входные сетевые журналы

function createBlog(n: string, d: string, w: string): BlogInputModel {
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
