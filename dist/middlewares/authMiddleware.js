"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, 'sssshhhh', (err, user) => {
            if (err) {
                return res.json({ 'status': false, 'message': "Unauthorize" });
            }
            //req.user = user;
            next();
        });
    }
    else {
        // res.sendStatus(401);
        return res.json({ 'status': false, 'message': "Unauthorize" });
    }
};
//# sourceMappingURL=authMiddleware.js.map