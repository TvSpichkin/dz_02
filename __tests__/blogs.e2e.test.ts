import {req, getBlog} from "./helpers/test-helpers";
import {setDB} from "../src/db/db";
import {SET} from "../src/settings";
import {auth, bigStr, corrBlog1} from "./helpers/datasets";


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

    it("не должен создать сетевой журнал без авторизации и должен вернуть 401", async () => {
        await req.post(SET.PATH.BLOGS).send(corrBlog1).expect(401);
        await req.post(SET.PATH.BLOGS).set({"Authorization": "Basic cisaB"}).send(corrBlog1).expect(401);
        await getBlog.expect(200, []);
    });

    it("не должен создать сетевой журнал c неправильными входными данными", async () => {
        const blog = corrBlog1;

        await req.post(SET.PATH.BLOGS).set(auth).expect(400);
        await getBlog.expect(200, []);

        await req.post(SET.PATH.BLOGS).set(auth).send().expect(400);
        await getBlog.expect(200, []);

        await req.post(SET.PATH.BLOGS).set(auth).send({название: 0}).expect(400);
        await getBlog.expect(200, []);

        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, name: undefined}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, name: 0}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, name: bigStr(16)}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, name: "    "}).expect(400);
        await getBlog.expect(200, []);

        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, description: undefined}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, description: 0}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, description: bigStr(501)}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, description: "    "}).expect(400);
        await getBlog.expect(200, []);

        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, websiteUrl: undefined}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, websiteUrl: 0}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, websiteUrl: bigStr(101)}).expect(400);
        await req.post(SET.PATH.BLOGS).set(auth).send({...blog, websiteUrl: "    "}).expect(400);
        await getBlog.expect(200, []);
    });
});
