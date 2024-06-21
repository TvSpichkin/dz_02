import {req} from "./helpers/test-helpers";
import {setDB} from "../src/db/db";
import {SET} from "../src/settings";


describe("/blogs", () => {
    beforeAll(async () => {
        setDB();
    });
    
    it("должен вернуть 200 и пустой массив", async () => {
        await req.get(SET.PATH.BLOGS).expect(200, []);
    });
});
