const bioTask = $('#bio');
const edfTask = $('#edf');
const matTask = $('#mat');
const hisTask = $('#his');
const fisTask = $('#fis');
const ingTask = $('#ing');
const deselectBtn = $('#deselect');
const taskContainer = $('.task__container');
const scheduleContainer = $('.schedule__container');
const resetBtn = $('.deleteBtn');
const popUp = $('.pop-up__container');
const noBtn = $('#btn__no');
const yesBtn = $('#btn__yes');

let selectedColor, active;

//Event Listeners
taskContainer.click(selectTask);
scheduleContainer.click(setColors);
deselectBtn.click(resetTasks);
resetBtn.click(openPopup);
noBtn.click(closePopup);
yesBtn.click(deleteTasks);

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
    const allTasks = $('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Eliminar
function deleteTasks(){
    const tasks = $('.task');

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