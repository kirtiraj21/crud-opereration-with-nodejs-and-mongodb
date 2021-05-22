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
exports.StudentController = void 0;
const studentService_1 = require("../services/studentService");
class StudentController {
    constructor() { }
}
exports.StudentController = StudentController;
StudentController.getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = yield studentService_1.StudentService.getStudents();
        return res.status(200).json({ "message": "Get student successfully", "data": userdata });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
StudentController.postStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentServiceResponse = yield studentService_1.StudentService.postStudents(req.body, req.file);
        return res.status(200).json({ "message": studentServiceResponse });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
StudentController.getStudentsisActive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userdata = yield studentService_1.StudentService.getStudentsisActive();
        return res.status(200).send(userdata);
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
StudentController.updateStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentServiceResponse = yield studentService_1.StudentService.updateStudents(req.body, req.params);
        return res.status(200).json({ "message": studentServiceResponse });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
StudentController.deleteStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentServiceResponse = yield studentService_1.StudentService.deleteStudents(req.params);
        return res.status(200).json({ "message": studentServiceResponse });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
StudentController.loginStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentServiceResponse = yield studentService_1.StudentService.loginStudents(req.body);
        return res.status(200).send({ message: studentServiceResponse.message, token: studentServiceResponse.token, data: studentServiceResponse.data });
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
//# sourceMappingURL=studentController.js.map