const lista = document.getElementById('taskList');
function render(){
    lista.innerHTML = '';

    tasks.forEach(t => {
        const li = document.createElement('li');
        li.className = `task-item ${t.completed ? 'completed': ''}`
        

        li.innerHTML = `
            <div></div>
            <div class="actions">
                <button class="btn-edit">e</button>
                <button class="btn-delete">x</button>
            </div>
        `
       lista.appendChild(li);
   });
}