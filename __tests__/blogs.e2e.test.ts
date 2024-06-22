import {req} from "./helpers/test-helpers";
import {setDB} from "../src/db/db";
import {SET} from "../src/settings";


describe("/blogs", () => {
    beforeAll(async () => {
        setDB(); // Очистка базы данных перед началом тестирования
    });
    
    it("должен вернуть 200 и пустой массив", async () => {
        await req.get(SET.PATH.BLOGS).expect(200, []);
    });


    it("должен вернуть 404 для несуществующего сетевого журнала", async () => {
        await req.get(SET.PATH.BLOGS + "/-1").expect(404);
    });

});
