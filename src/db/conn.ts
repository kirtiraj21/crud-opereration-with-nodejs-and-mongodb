import mongoose from 'mongoose';

export async function database() {
    try {
        await mongoose.connect('mongodb://localhost:27017/students-api', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('connection sucessfully');
    } catch (error) {
        console.log(error);
    }

}
