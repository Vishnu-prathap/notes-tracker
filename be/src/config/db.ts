// import exp from "constants";
import mongoose from "mongoose";

const db = process.env.MONGODB_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/notes");
    console.log("MongoDB is connected!");
  } catch (error: any) {
    console.error(error);
    process.exit(1);
  }
};

export { connectDB };
