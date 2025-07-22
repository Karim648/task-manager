import express from "express"
import { router } from "./routes/tasks.js"

console.log("hello from the server");

const PORT = 8000;

const app = express();

// middleware 

app.use(express.json());

// routes

app.get("/hello", (req, res) => {
    res.send("Task Manager App");
}) 

app.use("/api/tasks", router)

app.get("/public/index.html", (req, res) => {
    console.log("got Delete");
    console.log(req.url);
    res.send("Hello world");
})

app.listen(PORT, () => console.log(`Server connected on port ${PORT}...`));
