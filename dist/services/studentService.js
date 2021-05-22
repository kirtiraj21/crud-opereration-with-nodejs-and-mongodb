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
exports.StudentService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const students_1 = __importDefault(require("../models/students"));
const alertmessageConstants_1 = require("../constants/alertmessageConstants");
class StudentService {
    static getStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            const userdata = yield students_1.default.find();
            return userdata;
        });
    }
    static postStudents(userdata, userfile) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailExist = yield students_1.default.findOne({ email: userdata.email });
            if (emailExist) {
                return alertmessageConstants_1.Alert.email_exist;
            }
            const hash = bcryptjs_1.default.hashSync(userdata.password, 10);
            const user = new students_1.default({
                name: userdata.name,
                email: userdata.email,
                password: hash,
                phone: userdata.phone,
                address: userdata.address,
                isActive: userdata.isActive,
                image: userfile.originalname
            });
            yield user.save();
            return alertmessageConstants_1.Alert.insert_success;
        });
    }
    static getStudentsisActive() {
        return __awaiter(this, void 0, void 0, function* () {
            const userdata = yield students_1.default.find({ isActive: true });
            return userdata;
        });
    }
    static updateStudents(userdata, params) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(params);
            const checkUser = yield students_1.default.findOne({ _id: params.id });
            if (!checkUser) {
                return alertmessageConstants_1.Alert.invalid_user;
            }
            const emailExist = yield students_1.default.findOne({ email: userdata.email, _id: { $ne: params.id } });
            if (emailExist) {
                return alertmessageConstants_1.Alert.email_exist;
            }
            yield students_1.default.findOneAndUpdate({ _id: params.id }, {
                name: userdata.name,
                email: userdata.email,
                phone: userdata.phone,
                address: userdata.address,
                isActive: userdata.isActive
            });
            return alertmessageConstants_1.Alert.update_success;
        });
    }
    static deleteStudents(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkUser = yield students_1.default.findOne({ _id: params.id });
            if (!checkUser) {
                return alertmessageConstants_1.Alert.invalid_user;
            }
            const userdata = yield students_1.default.deleteOne({ _id: params.id });
            return alertmessageConstants_1.Alert.delete_success;
        });
    }
    static loginStudents(userdata) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield students_1.default.findOne({ email: userdata.email });
            //console.log(user);
            if (user == null) {
                return Promise.reject({
                    statusCode: 404,
                    message: alertmessageConstants_1.Alert.invalid_user,
                });
            }
            //if (!user) return { "message": Alert.invalid_user };
            const match = yield bcryptjs_1.default.compare(userdata.password, user.password);
            if (match) {
                const accessToken = jsonwebtoken_1.default.sign({ email: userdata.email }, 'sssshhhh');
                return { "message": alertmessageConstants_1.Alert.login_success, "token": accessToken, "data": user };
            }
            return Promise.reject({
                statusCode: 400,
                message: alertmessageConstants_1.Alert.invalid_credentials,
            });
        });
    }
}
exports.StudentService = StudentService;
//# sourceMappingURL=studentService.js.map