import { useState } from "react"
import styles from './styles.module.scss'

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState('')

    return (
        <section className={styles.container}>
            <form >
                <div>
                    <label htmlFor="task-title">Adicionar tarefa</label>
                    <input type="text" id="task-title" placeholder="Titulo da tarefa" value={taskTitle} onChange={(event)=> setTaskTitle(event?.target.value)} />
                </div>

                <button>Adicionar tarefa</button>
            </form>
        </section>
    )
}