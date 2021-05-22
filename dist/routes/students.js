"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsRoute = void 0;
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
const uploadfileMiddleware_1 = require("../middlewares/uploadfileMiddleware");
const authMiddleware_1 = require("../middlewares/authMiddleware");
exports.studentsRoute = express_1.default.Router();
exports.studentsRoute.get('/isActive', studentController_1.StudentController.getStudentsisActive);
exports.studentsRoute.get('/', authMiddleware_1.authenticateJWT, studentController_1.StudentController.getStudents);
exports.studentsRoute.post('/login', studentController_1.StudentController.loginStudents);
exports.studentsRoute.post('/', authMiddleware_1.authenticateJWT, uploadfileMiddleware_1.fileUpload.single('image'), studentController_1.StudentController.postStudents);
exports.studentsRoute.put('/:id', studentController_1.StudentController.updateStudents);
exports.studentsRoute.delete('/:id', studentController_1.StudentController.deleteStudents);
//# sourceMappingURL=students.js.map