import {BlogDbType} from "../../db/blogsDbTypes";
import {db} from "../../db/db";
import {BlogInputModel, BlogViewModel} from "../../IOtypes/blogsTypes";


export const blogsRep = {
    getAll() {
        return db.blogs.map(this.maper);
    }, // Извлечение всех сетевых журналов
    find(id: string) {
        return db.blogs.find(b => String(b.id) === id);
    }, // Извлечение сетевого журнала по идентификатору
    create(blog: BlogInputModel) {
        const newBlog: BlogDbType = {
            id: db.blogs.length ? db.blogs[db.blogs.length - 1].id + 1 : 1,
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
        };

        db.blogs.push(newBlog);

        return this.maper(newBlog);
    }, // Запись сетевого журнала в БД
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
