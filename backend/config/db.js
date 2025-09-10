import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ameer9911:Ameer_2025@cluster0.zfn7njw.mongodb.net/TaskFlow')
        .then(() => console.log('DB CONNECTED'));
}