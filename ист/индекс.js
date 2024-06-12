"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ____1 = require("./\u043F\u0440\u0438\u043B");
const //МП = "127.0.0.1", // Адрес межсетевого протокола (МП)
порт = process.env.PORT || 3e3; // Порт, прослушиваемый сервером
____1.пр.listen(порт, () => {
    console.log("Сервер доступен по адресу " + "МП" + " и случшает порт " + порт);
});
