import { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";


export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("Tarefa 1");

  const {tasks, setTasks,handleToggleTaskStatus} = useContext(TasksContext)

  // const [tasks, setTasks] = useState([] as Task[]);

  /*
  [
    {title: 'Tarefa ', done: boolean, id: number}
  ]
  */
  // função disparada quando o usuário quer uma tarefa nova
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();
    if (taskTitle.length < 3) {
      alert(
        "Não é possível adicionar uma tarefa com menos de 3 letras. A tarefa tem que ter no minimo 3 caractéres."
      );

      return
    }

    const newTask = [
      ...tasks, // pega todas as tarefas que já existam e coloca nesse novo valor do estado de tarefas
      { id: new Date().getTime(), title: taskTitle, done: false },
    ]
    
    // Adicione a tarefa
    setTasks(newTask);
    
    // salvando no localStorage
    localStorage.setItem('tasks', JSON.stringify(newTask))

    setTaskTitle("")
  }
  // function handleToggleTaskStatus(taskId: number){
  //   const newTasks = tasks.map((task)=>{
  //       if(taskId === task.id){
  //           return{...task, done: !task.done}
  //       }
  //       return task

    
  //   })
  //   setTasks(newTasks)
  //   localStorage.setItem('tasks', JSON.stringify(newTasks))
  // }
  function removeTask(taskId: number){
    const newTasks = tasks.filter((task)=>{
        return(taskId !== task.id)
    })
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }
 


  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar tarefa</label>
          <input
            type="text"
            id="task-title"
            placeholder="Titulo da tarefa"
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
          />
        </div>

        <button type="submit">Adicionar tarefa</button>
      </form>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={`item-${task.id/60}`}>
              <div>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
                checked={task.done}
              />
              <label htmlFor={`task-${task.id}`} className={task.done? styles.done: "pendente"}>{task.title}</label>

              </div>
              <button onClick={()=> removeTask(task.id)}>Remover</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
