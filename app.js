import * as state from "./state.js";

import * as ui from "./ui.js";

document.addEventListener('DOMContentLoaded', async ()=>{
    const input = document.querySelector('input');
                const addBtn = document.querySelector('.btn-add');

                input.addEventListener("keydown", (e)=>{
                    if(e.key === "Enter"){
                        addTask();
                    }
                })

                addBtn.addEventListener('click', addTask);

                function addTask(){
                    if(input.value.trim() === '') return; // Evita agregar tareas vacías
                    
                    const newTask = {
                        text: input.value.trim(),
                        id: Date.now(),
                        completed: false
                    }
                    tasks.push(newTask);
                    input.value = '';

                    console.log(tasks);
                    render();

})
