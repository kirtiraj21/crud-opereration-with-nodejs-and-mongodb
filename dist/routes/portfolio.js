"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioRoute = void 0;
const express_1 = __importDefault(require("express"));
const portfolioController_1 = require("../controllers/portfolioController");
const uploadfileMiddleware_1 = require("../middlewares/uploadfileMiddleware");
const authMiddleware_1 = require("../middlewares/authMiddleware");
exports.portfolioRoute = express_1.default.Router();
exports.portfolioRoute.get('/', authMiddleware_1.authenticateJWT, portfolioController_1.PortfolioController.getPortfolio);
exports.portfolioRoute.post('/', authMiddleware_1.authenticateJWT, uploadfileMiddleware_1.fileUpload.array('images'), portfolioController_1.PortfolioController.postPortfolio);
//# sourceMappingURL=portfolio.js.map