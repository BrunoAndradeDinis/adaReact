import { useContext, useState } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

// styles.header

export const Header: React.FC = () => {
  const {tasks} = useContext(TasksContext);

  const totalTasks = tasks.length
  const totalPending = tasks.reduce((total, task ) =>{
    if(!task.done) return total + 1
    return total
  },0)
  const totalDone = totalTasks - totalPending

  console.log("Header", tasks);
  const [estado, funcaoParaAlterarOEstado] = useState(""); // hook de estado, tem que ser iniciado com algum valor/dado para ele retornar, ele vai retornar um array com 2 elementos, uma tupla, contendo na posição [0] o estado [1] a função para alterar o estado

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My To-do</h1>

          <span>Bem vindo, Brinu!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalPending} />
          <StatsCard title="Tarefas concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
