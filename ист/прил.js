"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.путь = exports.пр = void 0;
const express_1 = __importDefault(require("express"));
const ________1 = require("./\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430");
const _________1 = require("./\u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0435\u0440");
const __1 = require("./\u0431\u0434");
exports.пр = (0, express_1.default)(); // Определение экспресс приложения
exports.путь = {
    //осн: encodeURI("/hometask_01/api"),
    видео: encodeURI("/videos"),
    тест: encodeURI("/testing/all-data")
};
//путь.видео = путь.осн + путь.видео;
//путь.тест = путь.осн + путь.тест;
const промежПОтелаЗОДС = express_1.default.json();
exports.пр.use(промежПОтелаЗОДС);
exports.пр.get(exports.путь.видео, (запр, отв) => {
    var найдВидео = __1.бд.видео;
    if (запр.query.title)
        найдВидео = найдВидео.filter(в => в.название.indexOf(запр.query.title) > -1);
    отв.json(найдВидео.map(_________1.бдВвид));
});
exports.пр.get(exports.путь.видео + "/:id", (запр, отв) => {
    const найдВидео = __1.бд.видео.find(в => в.ид === +запр.params.id);
    if (!найдВидео) {
        отв.sendStatus(404);
        return 404;
    }
    отв.json((0, _________1.бдВвид)(найдВидео));
});
exports.пр.post(exports.путь.видео, (запр, отв) => {
    if ((0, ________1.провВводаСозданияВидео)(запр.body, отв))
        return 400;
    const датаСоздания = +(new Date());
    const добВидео = {
        ид: __1.бд.видео.length ? __1.бд.видео[__1.бд.видео.length - 1].ид + 1 : 0,
        название: запр.body.title,
        автор: запр.body.author,
        можноСкачать: false,
        минВозрастноеОграничение: null,
        созданВ: new Date(датаСоздания).toISOString(),
        датаПубликации: new Date(датаСоздания + 864e5).toISOString(),
        доступныеРазрешения: запр.body.availableResolutions
    };
    __1.бд.видео.push(добВидео);
    отв.status(201).json((0, _________1.бдВвид)(добВидео));
});
exports.пр.delete(exports.путь.видео + "/:id", (запр, отв) => {
    const найдВидео = __1.бд.видео.find(в => в.ид === +запр.params.id);
    if (!найдВидео) {
        отв.sendStatus(404);
        return 404;
    }
    __1.бд.видео = __1.бд.видео.filter(в => в.ид !== +запр.params.id);
    отв.sendStatus(204);
});
exports.пр.put(exports.путь.видео + "/:id", (запр, отв) => {
    if ((0, ________1.провВводаОбновленияВидео)(запр.body, отв))
        return 400;
    const найдВидео = __1.бд.видео.find(в => в.ид === +запр.params.id);
    if (!найдВидео) {
        отв.sendStatus(404);
        return 404;
    }
    найдВидео.название = запр.body.title;
    найдВидео.автор = запр.body.author;
    найдВидео.можноСкачать = запр.body.canBeDownloaded;
    найдВидео.минВозрастноеОграничение = запр.body.minAgeRestriction;
    найдВидео.датаПубликации = new Date(запр.body.publicationDate).toISOString();
    найдВидео.доступныеРазрешения = запр.body.availableResolutions;
    отв.sendStatus(204);
});
exports.пр.delete(exports.путь.тест, (запр, отв) => {
    __1.бд.видео = [];
    отв.sendStatus(204);
});
