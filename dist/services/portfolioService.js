"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
const portfolio_1 = __importDefault(require("../models/portfolio"));
const alertmessageConstants_1 = require("../constants/alertmessageConstants");
class PortfolioService {
    static getPortfolio() {
        return __awaiter(this, void 0, void 0, function* () {
            const userdata = yield portfolio_1.default.find();
            return userdata;
        });
    }
    static postPortfolio(userdata, userfile) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = userfile.map(function (val) {
                return val.originalname;
            });
            const user = new portfolio_1.default({
                name: userdata.name,
                image: files.toString()
            });
            yield user.save();
            return alertmessageConstants_1.Alert.insert_success;
        });
    }
}
exports.PortfolioService = PortfolioService;
//# sourceMappingURL=portfolioService.js.map