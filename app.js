const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

let tasks = [];

// Registrar nueva tarea
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    
    // Añadir tarea a la lista de tareas
    tasks.push({ description, dueDate });
    updateTaskList();
    
    // Limpiar formulario
    taskForm.reset();
    showTrack();
});

// Actualizar lista de tareas
function updateTaskList() {
    taskList.innerHTML = '';
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.description} - ${task.dueDate}`;
        
        const daysRemaining = (new Date(task.dueDate) - new Date()) / (1000 * 60 * 60 * 24);
        if (daysRemaining <= 30) {
            listItem.style.color = 'red';
        } else if (daysRemaining <= 60) {
            listItem.style.color = 'orange';
        } else {
            listItem.style.color = 'green';
        }
        
        taskList.appendChild(listItem);
    });
}

// Funciones para mostrar y ocultar secciones
function showHome() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('track-section').style.display = 'none';
}

function showRegister() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
    document.getElementById('track-section').style.display = 'none';
}

function showTrack() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('track-section').style.display = 'block';
}
