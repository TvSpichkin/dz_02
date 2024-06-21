import {BlogDbType} from "./blogsDbTypes";


export type DBType = {
    blogs: BlogDbType[], // Массив сетевых журналов
    //posts: PostDbType[]
}; // Типизация базы данных (что мы будем в ней хранить)

export const db: DBType = {
    blogs: [{
        id: "1", // Идентификатор
        name: "Дед Максим", // Имя; максимальная длина: 15
        description: "Вот и помер...", // Описание; максимальная длина: 500
        websiteUrl: "https:\/\/maksim.ded/pomer" // ЕУМР сетевого узла; максимальная длина: 100, шаблон: ^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$
    }], // Тестовое заполнение сетевых журналов
    //posts: []
}; // Создаём базу данных (пока это просто JS-структура)
