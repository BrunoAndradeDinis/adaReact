import React, { createContext, useState, useEffect } from "react";

export const TasksContext = createContext({} as TasksContextData);
export interface Task {
  title: string;
  done: boolean;
  id: number;
}

interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleToggleTaskStatus: (taskId: number) => void;
}

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  // Utilizando os dados do LocalStorage para renderizar as tasks que ja foram criadas.
  useEffect(() => {
    const taskOnLocalStorage = localStorage.getItem("tasks");

    if (taskOnLocalStorage) {
      setTasks(JSON.parse(taskOnLocalStorage));
    }
  }, []);

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks, handleToggleTaskStatus }}>
      {children}
    </TasksContext.Provider>
  );
};
