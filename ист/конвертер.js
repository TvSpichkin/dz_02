"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.бдВвид = void 0;
function бдВвид(бдЧаст) {
    return {
        id: бдЧаст.ид,
        title: бдЧаст.название,
        author: бдЧаст.автор,
        canBeDownloaded: бдЧаст.можноСкачать,
        minAgeRestriction: бдЧаст.минВозрастноеОграничение,
        createdAt: бдЧаст.созданВ,
        publicationDate: бдЧаст.датаПубликации,
        availableResolutions: бдЧаст.доступныеРазрешения
    };
}
exports.бдВвид = бдВвид;
