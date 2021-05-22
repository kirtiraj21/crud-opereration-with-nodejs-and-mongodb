import bcrypt from "bcryptjs";

import jwt from 'jsonwebtoken';

import studentSchema, { IStudent } from '../models/students';
import { Alert } from '../constants/alertmessageConstants';

export class StudentService {

    public static async getStudents() {
        const userdata = await studentSchema.find();
        return userdata;
    }

    public static async postStudents(userdata: IStudent, userfile: any): Promise<void | String> {

        const emailExist = await studentSchema.findOne({ email: userdata.email });
        if (emailExist) {
            return Alert.email_exist;
        }
        const hash = bcrypt.hashSync(userdata.password, 10);
        const user = new studentSchema({
            name: userdata.name,
            email: userdata.email,
            password: hash,
            phone: userdata.phone,
            address: userdata.address,
            isActive: userdata.isActive,
            image: userfile.originalname
        });
        await user.save();
        return Alert.insert_success;

    }

    public static async getStudentsisActive() {
        const userdata = await studentSchema.find({ isActive: true });
        return userdata;
    }

    public static async updateStudents(userdata: IStudent, params: any): Promise<void | string> {
        // console.log(params);
        const checkUser = await studentSchema.findOne({ _id: params.id });
        if (!checkUser) { return Alert.invalid_user; }
        const emailExist = await studentSchema.findOne({ email: userdata.email, _id: { $ne: params.id } });
        if (emailExist) { return Alert.email_exist; }
        await studentSchema.findOneAndUpdate({ _id: params.id }, {
            name: userdata.name,
            email: userdata.email,
            phone: userdata.phone,
            address: userdata.address,
            isActive: userdata.isActive
        });
        return Alert.update_success;

    }

    public static async deleteStudents(params: any): Promise<void | string> {
        const checkUser = await studentSchema.findOne({ _id: params.id });
        if (!checkUser) { return Alert.invalid_user; }
        const userdata = await studentSchema.deleteOne({ _id: params.id });
        return Alert.delete_success;
    }


    public static async loginStudents(userdata: IStudent): Promise<IStudent | Object> {
        const user: IStudent = await studentSchema.findOne({ email: userdata.email });
        //console.log(user);
        if (user == null) {
            return Promise.reject({
                statusCode: 404,
                message: Alert.invalid_user,
            });
        }
        //if (!user) return { "message": Alert.invalid_user };
        const match = await bcrypt.compare(userdata.password, user.password);
        if (match) {
            const accessToken = jwt.sign({ email: userdata.email }, 'sssshhhh');
            return { "message": Alert.login_success, "token": accessToken, "data": user };
        }
        return Promise.reject({
            statusCode: 400,
            message: Alert.invalid_credentials,
        });

    }

}
