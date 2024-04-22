// Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskElement(task));
});

// Function to add a task
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const task = { id: Date.now(), text: taskText };
        addTaskElement(task);
        saveTask(task);
        input.value = '';
    }
}

// Function to save a task to local storage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to display a task on the UI
function addTaskElement(task) {
    const taskList = document.getElementById('taskList');
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
        <span>${task.text}</span>
        <button onclick="removeTask(${task.id})">Remove</button>
    `;
    taskList.appendChild(taskElement);
}

// Function to remove a task
function removeTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const taskElement = document.querySelector(`li[data-id="${taskId}"]`);
    if (taskElement) {
        taskElement.remove();
    }
}
