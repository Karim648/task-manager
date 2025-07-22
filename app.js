import express from "express"
import { router } from "./routes/tasks.js"
import { connectDB } from "./db/connect.js"
import "dotenv/config"

console.log("hello from the server");

const PORT = 8000;

const app = express();

// middleware 

app.use(express.static("./public"));  // serves static files in public directory
app.use(express.json());

// routes

app.use("/api/tasks", router)

const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server connected on port ${PORT}...`));
        
    } catch (error) {

        console.log(error);
    }
}

start();