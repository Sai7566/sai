import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // no options needed
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.log('❌ MongoDB Connection Failed:', error);
    process.exit(1);
  }
};

export default connectDB;

