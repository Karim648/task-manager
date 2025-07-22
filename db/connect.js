import mongoose from "mongoose"

export async function connectDB(url) {

    try {
        await mongoose.connect(url); 
        console.log("connected to the db...");
    } catch (err) {
        console.log(err);
    } 

}
