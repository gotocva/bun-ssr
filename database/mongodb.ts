
import mongoose from "mongoose";


export const connectDB = () => {

    return mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/elysia")
        .then((connection) => {
            console.log("Connected to MongoDB");
            return connection;
        })
        .catch((err) => {
            console.log('Mongodb Connection error : '+err);
            return false;
        });
}