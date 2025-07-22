const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskSection = document.querySelector(".task-section");
const deleteBtn = document.getElementById("delete-btn");

taskForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("clicked");
    console.log(taskInput.value);
    renderTask(taskInput.value);
    taskForm.reset();  // clears form
})

function renderTask(task) {
    taskSection.innerHTML += `
    <div class="task-div">
        <h2>${task}</h2>
        <div class="buttons">
            <button class="edit">✎</button>
            <button class="delete">🗑️</button>
        </div>
    </div>
    `;
}

taskSection.addEventListener("click", async (e) => {
    if (e.target.classList.contains("delete")) {
        console.log("delete clicked");
        console.log(e.target.closest(".task-div").remove());
        const response = await fetch("/public/index.html", {
            method: "DELETE"
        });
        const data = await response.json();
    }

    if (e.target.classList.contains("edit")) {
        console.log("edit clicked");
    }

})


// to do (CRUD)
// create a server/app with express listen on port
// when a task is created send a post request to add to database (create)
// receive and handle post request with our server (update)
// delete from data base on delete button send delete (delete)


