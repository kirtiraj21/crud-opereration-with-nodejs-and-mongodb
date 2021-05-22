"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const students_1 = require("./students");
const portfolio_1 = require("./portfolio");
exports.router = express_1.default.Router();
exports.router.use('/students', students_1.studentsRoute);
exports.router.use('/portfolio', portfolio_1.portfolioRoute);
//# sourceMappingURL=index.js.map