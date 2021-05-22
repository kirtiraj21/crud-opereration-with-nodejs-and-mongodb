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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioController = void 0;
const portfolioService_1 = require("../services/portfolioService");
class PortfolioController {
    constructor() { }
}
exports.PortfolioController = PortfolioController;
PortfolioController.getPortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = yield portfolioService_1.PortfolioService.getPortfolio();
        return res.status(200).json({ "message": "Get student successfully", "data": userdata });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
PortfolioController.postPortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentServiceResponse = yield portfolioService_1.PortfolioService.postPortfolio(req.body, req.files);
        return res.status(200).json({ "message": studentServiceResponse });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
//# sourceMappingURL=portfolioController.js.map