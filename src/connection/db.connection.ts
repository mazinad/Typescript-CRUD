import mongoose from "mongoose";
import * as dotenv from "dotenv";

let database: mongoose.Connection;

export const connectToDB = () => {
    dotenv.config();
    if(database){
        console.log("no database connection");
        return;
    }
    console.log(`${process.env.DB_CONN}`);
    mongoose.connect(`${process.env.DB_CONN}`);
    database = mongoose.connection;
    database.once("open",async()=>{
        console.log("connected to database");
    });
    database.on("error",()=>{
        console.log("error connecting to database");
    });
     return database;
}
