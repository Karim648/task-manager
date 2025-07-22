

export const getAllTasks = (req, res) => {
    console.log("get all items");
    res.send("get all items");
};

export const createTask = (req, res) => {
    console.log("create item");
    res.json(req.body);
};

export const getTask = (req, res) => {
    console.log("get item");
    console.log(req.params.id)
    res.json({ id: req.params.id });
};  

export const updateTask = (req, res) => {
    console.log("update item");
    res.send("update item");
};

export const deleteTask = (req, res) => {
    console.log("delete item");
    res.send("delete item");
};