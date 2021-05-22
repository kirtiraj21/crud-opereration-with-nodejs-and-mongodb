import mongoose, { Document } from 'mongoose';

export interface IPortfolio extends Document {
    _id?: string;
    name: string;
    portfolio: string;
}
const portfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    image: {
        type: String,
        required: true
    }

});

// create new collection

export default mongoose.model<IPortfolio>('Portfolio', portfolioSchema);