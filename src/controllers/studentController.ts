import { Request, Response } from 'express';

import { StudentService } from '../services/studentService';

export class StudentController {

    public static getStudents = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userdata = await StudentService.getStudents();
            return res.status(200).json({ "message": "Get student successfully", "data": userdata });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    public static postStudents = async (req: Request, res: Response): Promise<Response> => {
        try {
            const studentServiceResponse = await StudentService.postStudents(req.body, req.file);
            return res.status(200).json({ "message": studentServiceResponse });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    public static getStudentsisActive = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userdata = await StudentService.getStudentsisActive();
            return res.status(200).send(userdata);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    public static updateStudents = async (req: Request, res: Response): Promise<Response> => {
        try {
            const studentServiceResponse = await StudentService.updateStudents(req.body, req.params);
            return res.status(200).json({ "message": studentServiceResponse });

        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    public static deleteStudents = async (req: Request, res: Response): Promise<Response> => {
        try {
            const studentServiceResponse = await StudentService.deleteStudents(req.params);
            return res.status(200).json({ "message": studentServiceResponse });

        } catch (error) {
            return res.status(400).send(error.message);
        }
    }


    public static loginStudents = async (req: Request, res: Response): Promise<Response> => {
        try {
            const studentServiceResponse: any = await StudentService.loginStudents(req.body);
            return res.status(200).send({ message: studentServiceResponse.message, token: studentServiceResponse.token, data: studentServiceResponse.data });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    constructor() { }
}
