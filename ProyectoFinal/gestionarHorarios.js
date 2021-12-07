const bioTask = document.getElementById('bio');
const edfTask = document.getElementById('edf');
const matTask = document.getElementById('mat');
const hisTask = document.getElementById('his');
const fisTask = document.getElementById('fis');
const ingTask = document.getElementById('ing');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

// Espacios curriculares click  (3)
function selectTask (e){
    resetTasks()

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'bio':
            activeTask(bioTask, taskColor);
            icon = '<i class="fas fa-microscope"></i>';
            break
        case 'edf':
            activeTask(edfTask, taskColor);
            icon = '<i class="fas fa-running"></i>';
            break
        case 'mat':
            activeTask(matTask, taskColor);
            icon = '<i class="fas fa-calculator"></i>';
            break
        case 'his':
            activeTask(hisTask, taskColor);
            icon = '<i class="fas fa-book"></i>';
            break
        case 'fis':
            activeTask(fisTask, taskColor);
            icon = '<i class="fas fa-temperature-low"></i>';
            break
        case 'ing':
            activeTask(ingTask, taskColor);
            icon = '<i class="fas fa-language"></i>';
            break
    }

};

// Setear colores para la agenda (4)
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        e.target.parentElement.innerHTML = icon;
    }
};

// Espacio curricular activo (1)
function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reiniciar (2)
function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Eliminar
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Abrir ventana pop-up
function openPopup(){
    popUp.style.display = 'flex';
}

// Cerrar ventana pop-up
function closePopup(){
    popUp.style.display = 'none';
}