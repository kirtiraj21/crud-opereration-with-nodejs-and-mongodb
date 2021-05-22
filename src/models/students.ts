import mongoose, { Document } from 'mongoose';
//import { IStudent } from '../interface/studentInterface';
export interface IStudent extends Document {
    _id?: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    address: string;
    isActive: boolean;
    image: string;
}
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email Already exist'],
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isActive: Boolean,
    image: String,

});

// create new collection

export default mongoose.model<IStudent>('Student', studentSchema);