"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const multer_1 = __importDefault(require("multer"));
exports.fileUpload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads');
        },
        filename(req, file, cb) {
            cb(null, file.originalname);
        },
    }),
    fileFilter(req, file, callback) {
        // console.log(file);
        callback(null, true);
    },
});
//# sourceMappingURL=uploadfileMiddleware.js.map