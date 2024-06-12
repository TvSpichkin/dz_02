"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.провВводаОбновленияВидео = exports.провВводаСозданияВидео = void 0;
const _____1 = require("./\u0441\u0445\u0435\u043C\u044B");
function добавлениеОшибки(поле, сообщение, сообщенияОбОшибках) {
    сообщенияОбОшибках.errorsMessages.push({
        message: сообщение,
        field: поле
    });
}
function ошибкиВводаОбнов(тело, отв) {
    const сообщОбОшибках = {
        errorsMessages: []
    };
    function добОшибки(поле, сообщение) {
        добавлениеОшибки(поле, сообщение, сообщОбОшибках);
    }
    if (!тело.canBeDownloaded)
        добОшибки("canBeDownloaded", "Отсутствует поле о разрешении скачивания видео");
    else if (typeof тело.canBeDownloaded !== "boolean")
        добОшибки("canBeDownloaded", "Поле о разрешении скачивания видео не является логическим значением");
    if (!тело.minAgeRestriction)
        добОшибки("minAgeRestriction", "Отсутствует поле минимального возрастного ограничения видео");
    else if (тело.minAgeRestriction !== null) {
        if (typeof тело.minAgeRestriction !== "number")
            добОшибки("minAgeRestriction", "Поле минимального возрастного ограничения видео не является числом");
        else if (!!(тело.minAgeRestriction % 1))
            добОшибки("minAgeRestriction", "Минимальное возрастное ограничение видео не является целым числом");
        else if (тело.minAgeRestriction > 18)
            добОшибки("minAgeRestriction", "Минимальное возрастное ограничение видео не должно быть больше 18");
        else if (тело.minAgeRestriction < 1)
            добОшибки("minAgeRestriction", "Минимальное возрастное ограничение видео не должно быть меньше 1");
    }
    if (!тело.publicationDate)
        добОшибки("publicationDate", "Отсутствует дата публикации видео");
    else if (typeof тело.publicationDate !== "string")
        добОшибки("publicationDate", "Дата публикации видео не является строкой");
    else if (isNaN((new Date(тело.publicationDate)).getTime()))
        добОшибки("publicationDate", "Неверная дата публикации видео");
    return сообщОбОшибках;
}
function провВвода(тело, отв, сообщенияОбОшибках) {
    const сообщОбОшибках = сообщенияОбОшибках ? сообщенияОбОшибках : {
        errorsMessages: []
    };
    function добОшибки(поле, сообщение) {
        добавлениеОшибки(поле, сообщение, сообщОбОшибках);
    }
    if (!тело.title)
        добОшибки("title", "Отсутствует название видео");
    else if (typeof тело.title !== "string")
        добОшибки("title", "Название видео не является строкой");
    else if (тело.title.length > 40)
        добОшибки("title", "Название видео содержит больше 40 символов");
    else if (!тело.title.replace(/ /g, ""))
        добОшибки("title", "Пустое название видео");
    if (!тело.author)
        добОшибки("author", "Отсутствует имя автора видео");
    else if (typeof тело.author !== "string")
        добОшибки("author", "Имя автора видео не является строкой");
    else if (тело.author.length > 20)
        добОшибки("author", "Имя автора видео содержит больше 20 символов");
    else if (!тело.author.replace(/ /g, ""))
        добОшибки("author", "Пустое имя автора видео");
    if (!тело.availableResolutions)
        добОшибки("availableResolutions", "Отсутствуют доступные разрешения видео");
    else if (!Array.isArray(тело.availableResolutions))
        добОшибки("availableResolutions", "Доступные разрешения видео не являются массивом");
    else if (!тело.availableResolutions.length)
        добОшибки("availableResolutions", "В массиве отсутствуют доступные разрешения видео");
    else if (!тело.availableResolutions.every(д => typeof д === "string"))
        добОшибки("availableResolutions", "Доступные разрешения видео не являются массивом строк");
    else if (!тело.availableResolutions.every(д => _____1.Разрешения[д]))
        добОшибки("availableResolutions", "В массиве содержатся недоступные разрешения видео");
    if (сообщОбОшибках.errorsMessages.length) {
        отв.status(400).json(сообщОбОшибках);
        return true;
    }
    return false;
}
function провВводаСозданияВидео(тело, отв) {
    return провВвода(тело, отв, null);
}
exports.провВводаСозданияВидео = провВводаСозданияВидео;
function провВводаОбновленияВидео(тело, отв) {
    return провВвода(тело, отв, ошибкиВводаОбнов(тело, отв));
}
exports.провВводаОбновленияВидео = провВводаОбновленияВидео;
