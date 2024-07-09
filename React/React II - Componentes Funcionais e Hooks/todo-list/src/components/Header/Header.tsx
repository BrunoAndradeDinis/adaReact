import { useState } from "react"
import { StatsCard } from "../StatsCard/StatsCard"
import styles from "./styles.module.scss"


// styles.header


export const Header: React.FC = () => {

    const [estado, funcaoParaAlterarOEstado] = useState('') // hook de estado, tem que ser iniciado com algum valor/dado para ele retornar, ele vai retornar um array com 2 elementos, uma tupla, contendo na posição [0] o estado [1] a função para alterar o estado

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div >
                    <h1>My To-do</h1>

                    <span>Bem vindo, Brinu!</span>
                </div>

                <div>
                    <StatsCard title="Total de Tarefas" value={5}/>
                    <StatsCard title="Tarefas Pendentes" value={4}/>
                     <StatsCard title="Tarefas concluídas" value={1}/>
                </div>
            </div>

        </header>
    )
}