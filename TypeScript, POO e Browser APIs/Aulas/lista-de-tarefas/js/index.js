const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title");
const todoList = document.querySelector("#todo-list");

var tasks = []; // [{ title: 'Tarefa 1', done: false }, ... ]
function tasksLocalStorage(){
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
function renderTaskOnHTML(taskTitle, done = false){
  const li = document.createElement("li");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.addEventListener('change', (event)=>{
    const liToToggle = event.target.parentElement
    const done = event.target.checked

    const spanToToggle = liToToggle.querySelector('span')
    console.log(spanToToggle)
    if(done){
      spanToToggle.style.textDecoration = 'line-through'
    } else {
      spanToToggle.style.textDecoration = 'none'
    }

    tasks.map( t => {
      if (t.title === spanToToggle.textContent){
        t.done = !t.done
      } else {
        return t
      }

     
    })

    tasksLocalStorage()
  })
  inputCheckbox.checked = done

  const spanTitle = document.createElement("span");
  spanTitle.textContent = taskTitle;

  if (done){
    spanTitle.style.textDecoration = 'line-through'
  }

  const buttonRemove = document.createElement("button");
  buttonRemove.textContent = "Remover";
  buttonRemove.addEventListener('click', (event)=>{
    const liToRemove = event.target.parentElement
    
    const titleToRemove = liToRemove.querySelector('span').textContent
    console.log('Esse é o textContent: ',titleToRemove)

    tasks = tasks.filter(t => t.title !== titleToRemove)

    todoList.removeChild(liToRemove)
    tasksLocalStorage()
  })

  li.appendChild(inputCheckbox);
  li.appendChild(spanTitle);
  li.appendChild(buttonRemove);

  todoList.appendChild(li);
}

window.onload = () => {
  
  const taksOnLocalStorage = localStorage.getItem('tasks')

  if(!taksOnLocalStorage) return
  tasks = JSON.parse(taksOnLocalStorage)

  tasks.forEach(t => {
    renderTaskOnHTML(t.title, t.done)
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter, pelo menos, 3 caracteres.");
    return;
  }
  // Adicionando a nova tarefa no array de tasks
  console.log(taskTitle);
  tasks.push({
    title: taskTitle,
    done: false,
  });
  // adicionando ao localStorage
 
  tasksLocalStorage()

  console.log(tasks)
  // Adicionando a nova tarefa no HTML
  renderTaskOnHTML(taskTitle)

  taskTitleInput.value = "";
});
