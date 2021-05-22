import express from 'express';

import { StudentController } from '../controllers/studentController';
import { fileUpload } from '../middlewares/uploadfileMiddleware';
import { authenticateJWT } from '../middlewares/authMiddleware';

export const studentsRoute = express.Router();

studentsRoute.get('/isActive', StudentController.getStudentsisActive);

studentsRoute.get('/', authenticateJWT, StudentController.getStudents);

studentsRoute.post('/login', StudentController.loginStudents);

studentsRoute.post('/', authenticateJWT, fileUpload.single('image'), StudentController.postStudents);

studentsRoute.put('/:id', StudentController.updateStudents);

studentsRoute.delete('/:id', StudentController.deleteStudents);
