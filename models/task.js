import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide name"],
        trim: true,  // gets rid of huge spaces
        maxlength: [20, "name can not be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false,  // task is not completed by default
    }
});

export const Task = mongoose.model("Task", taskSchema);  // mongodb will change the name of the model Task to tasks and we are saving this model to const Task. model is the collection name in ""

