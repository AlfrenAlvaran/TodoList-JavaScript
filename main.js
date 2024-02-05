let listContainer; // Declare listContainer globally
let input; // Declare input globally

document.addEventListener("DOMContentLoaded", renderDOM);

function renderDOM() {
    const container = document.createElement('div');
    container.classList.add('container');

    const todoApp = document.createElement('div');
    todoApp.classList.add('todo-app');

    const rowDiv = document.createElement("div");
    rowDiv.classList.add('row');

    input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Your Task to Do';
    input.classList.add('todo');

    const addBtn = document.createElement('button');
    addBtn.textContent = 'add';
    addBtn.classList.add('add');

    listContainer = document.createElement("ul");
    listContainer.id = 'listcontainer';

    document.body.appendChild(container);

    container.appendChild(todoApp);
    
    todoApp.appendChild(rowDiv);
    todoApp.appendChild(listContainer);

    rowDiv.appendChild(input);
    rowDiv.appendChild(addBtn);

    const addbutton = document.querySelector('.add');

    addbutton.addEventListener('click', addTask);

    // Trigger addTask function on Enter key press in the input field
    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    listContainer.addEventListener('click', func);

    // Call the data function to load stored tasks when the page loads
    data();
}

function addTask() {
    if (input.value === '') {
        alert("Are you fool? ");
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    save();
}

function func(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        save();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
}

function save() {
    localStorage.setItem('task', listContainer.innerHTML);
}

function data(){
    listContainer.innerHTML = localStorage.getItem("task");
}
