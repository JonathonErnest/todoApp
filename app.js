window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value;

        if (!taskText) {
            alert("Please fill out the task");
            return;
        }

        addTaskToList(taskText);

        input.value = "";
    });

    function addTaskToList(taskText) {
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.textContent = taskText;
        task_content_el.setAttribute("contenteditable", "true");

        task_el.appendChild(task_content_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const edit_button = document.createElement("button");
        edit_button.classList.add("edit");
        edit_button.textContent = "Edit";
        edit_button.addEventListener('click', () => {
            task_content_el.focus();
        });

        const delete_button = document.createElement("button");
        delete_button.classList.add("delete");
        delete_button.textContent = "Delete";
        delete_button.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        task_actions_el.appendChild(edit_button);
        task_actions_el.appendChild(delete_button);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
    }
});
