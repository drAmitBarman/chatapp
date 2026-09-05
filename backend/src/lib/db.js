import mongoose from "mongoose";

export async function connectDB(){
    try {
        const mongoUri=process.env.MONGO_URL
        if(!mongoUri)
        {
            throw  new Error("MONGO_URL is required")
        }

       const conn= await mongoose.connect(mongoUri);
       console.log("Mongo Db connected", conn.connection.host);
    } catch (error) {
        console.log("Mongo db connection error:  ",error.message);
        process.exit(1);

    }
}