import {agent} from "supertest";
import {app} from "../../src/app";
import {BlogInputModel} from "../../src/IOtypes/blogsTypes";


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
