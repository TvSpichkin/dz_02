import {BlogDbType} from "../../db/blogsDbTypes";
import {db} from "../../db/db";
import {BlogInputModel, BlogViewModel} from "../../IOtypes/blogsTypes";


export const blogsRep = {
    getAll() {
        return db.blogs.map(this.maper);
    }, // Извлечение сетевых журналов
    find(id: string) {
        return db.blogs.find(b => String(b.id) === id);
    },
    maper(blog: BlogDbType) {
        const blogForOutput: BlogViewModel = {
            id: String(blog.id),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl
        };

        return blogForOutput;
    } // Конвертация сетевых журналов из БД в модельный вид
}; // Работа с базой данных
