import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://jobairfahim63:1028806063@cluster0.aswb3.mongodb.net/food-del'
    )
    .then(() =>console.log("DB Connected"));
};
