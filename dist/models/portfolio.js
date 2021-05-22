"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const portfolioSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    image: {
        type: String,
        required: true
    }
});
// create new collection
exports.default = mongoose_1.default.model('Portfolio', portfolioSchema);
//# sourceMappingURL=portfolio.js.map