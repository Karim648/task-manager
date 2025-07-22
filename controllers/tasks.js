import { Task } from "../models/task.js"

export const getAllTasks = async (req, res) => {
    console.log("get all items");

    try {
        
        const tasks = await Task.find({});  // if left empty returns all documents in tasks collection into obj that we store in tasks
        res.status(200).json({ tasks });

    } catch (error) {

        res.status(500).json({ msg: error });
    }

};

export const createTask = async (req, res) => {

    console.log("create item");
    console.log(req.body);
    
    try {
        
        const task = await Task.create(req.body);  // creates new document in database in tasks collection with data from client
        res.status(201).json({ task });

    } catch (error) {
        
        res.status(500).json({ msg: error });

    }
    
};

export const getTask = async (req, res) => {
    
    try {

        console.log(req.params);
        const taskID = req.params.id;
        const task = await Task.findOne({ _id: taskID });
    
        if (!task) {  // task is null no task with that id
            return res.status(404).json({ msg: `No task with id: ${taskID}`});  // must return so code doesnt continue
        }

        res.status(200).json({ task });
        
    } catch (error) {

        res.status(500).json({ msg: error });
    }
};  

export const updateTask = async (req, res) => {
    console.log("update item");

    try {
        
        const taskID = req.params.id;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        
        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}` });
        }

        res.status(200).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error });
    }

};

export const deleteTask = async (req, res) => {
    console.log("delete item");
    console.log(req.params.id);

    try {
        
        const taskID = req.params.id;
        const task = await Task.deleteOne({ _id: taskID });

        if (!task) {
            return res.status(404).json({ msg: `Task with id: ${taskID} not found.`})
        }

        res.status(202).json({ task });

    } catch (error) {
        
        res.status(500).json({ msg: error });
    }
    
};