document.getElementById('add').addEventListener('click', function () {
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    const todosDiv = document.getElementById('todos');

    // Create a new task element
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete">X</button>
    `;

    todosDiv.appendChild(todoItem);

    // Clear input field
    taskInput.value = "";

    // Delete task when clicking X
    todoItem.querySelector('.delete').addEventListener('click', function () {
        todosDiv.removeChild(todoItem);
    });
});
