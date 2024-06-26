import {req, getBlog, postBlog} from "./helpers/test-helpers";
import {setDB} from "../src/db/db";
import {SET} from "../src/settings";
import {corrBlog1} from "./helpers/datasets";


describe("/blogs", () => {
    beforeAll(async () => {
        setDB(); // Очистка базы данных перед началом тестирования
    });
    
    it("должен вернуть 200 и пустой массив", async () => {
        await getBlog.expect(200, []);
    });


    it("должен вернуть 404 для несуществующего сетевого журнала", async () => {
        await req.get(SET.PATH.BLOGS + "/-1").expect(404);
    });

    it("не должен создать сетевой журнал без авторизации", async () => {
        await req.post(SET.PATH.BLOGS).send(corrBlog1).expect(401);
        await getBlog.expect(200, []);
    });

    /*it("не должен создать сетевой журнал c неправильными входными данными", async () => {
        const blog = corrBlog1;

        await postBlog.expect(400);
        await getBlog.expect(200, []);

        await postBlog.send().expect(400);
        await getBlog.expect(200, []);

        await postBlog.send({название: 0}).expect(400);
        await getBlog.expect(200, []);

        await postBlog.send({...blog, title: undefined}).expect(400);
        await postBlog.send({...blog, title: 0}).expect(400);
        await postBlog.send({...blog, title: "qwertyuiop[]asdfghjkl;'zxcvbnm,./12345678"}).expect(400);
        await postBlog.send({...blog, title: "    "}).expect(400);
        await getBlog.expect(200, []);

        await postBlog.send({...blog, author: undefined}).expect(400);
        await postBlog.send({...blog, author: 0}).expect(400);
        await postBlog.send({...blog, author: "qwertyuiop[]asdfghjkl"}).expect(400);
        await postBlog.send({...blog, author: "    "}).expect(400);
        await getBlog.expect(200, []);

        await postBlog.send({...blog, availableResolutions: undefined}).expect(400);
        await postBlog.send({...blog, availableResolutions: 0}).expect(400);
        await postBlog.send({...blog, availableResolutions: []}).expect(400);
        await postBlog.send({...blog, availableResolutions: [0]}).expect(400);
        await postBlog.send({...blog, availableResolutions: ["0"]}).expect(400);
        await getBlog.expect(200, []);
    });*/
});
