export type BlogInputModel = {
    name: string, // Имя; максимальная длина: 15
    description: string, // Описание; максимальная длина: 500
    websiteUrl: string // ЕУР сетевого узла; максимальная длина: 100, шаблон: ^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$
}; // Входная модель сетевого журнала
export type BlogViewModel = {
    id: string, // Идентификатор
    name: string, // Имя; максимальная длина: 15
    description: string, // Описание; максимальная длина: 500
    websiteUrl: string // ЕУР сетевого узла; максимальная длина: 100, шаблон: ^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$
}; // Выходная модель сетевого журнала
