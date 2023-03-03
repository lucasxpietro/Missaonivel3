import React from 'react'
import { ITask } from '../interfaces/Task'
//css
import  styles  from './LivrosListas.module.css';




interface Props  {
  taskList: ITask[]
  handleDelete(id:number): void
  handleEdit(): void;
}

const TaskList = ({taskList, handleDelete, }: Props) => {
  return (
    <>
       {taskList.length > 0?(
       taskList.map((task) =>(
        <div key = {task.id} className={styles.task}>
          <div className={styles.details}>
            <p><b>Titulo: </b> {task.title}</p>
            <p><b>Resumo: </b> {task.resumo}</p>
            <p><b>Editora: </b>{task.editora}</p>
            <p><b>Autores: </b>{task.autores}</p>
          </div>
          <div className={styles.actions}>
            
            <i 
             className='bi bi-trash'  
             onClick={() => {
              handleDelete(task.id); 
             }}  
            ></i>
          </div>
        </div>

       ))
       ) : (
        <h4>Não há Livros.</h4>
       )}
    </>
  )
}

export default TaskList