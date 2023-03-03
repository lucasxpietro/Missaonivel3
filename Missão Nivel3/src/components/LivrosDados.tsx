import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'



//css
import styles from './LivrosDados.module.css'

//Interface
import { ITask } from '../interfaces/Task'




interface Props  {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {


  // iniciando o formulario => aula 332
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("") 
  const [resumo, setResumo] = useState<string>("")
  const [editora, setEditora] = useState<string>("")
  const [autores, setAutores] = useState<string>("")

// criar uma função para inclusao de tarefaas no sistema

const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const id = Math.floor(Math.random() * 1000)
  const newTask: ITask = {id, title, resumo, editora, autores}

  setTaskList!([...taskList, newTask])

  setTitle("");
  setId(0);
  setResumo("");
  setEditora("")
  setAutores("")
  console.log(taskList);




}

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "title"){
      setTitle(e.target.value)
  }else{
    setId(parseInt(e.target.value))
  }
}

const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "resumo"){
      setResumo(e.target.value)
  }else{
    setId(parseInt(e.target.value))
  }
}

const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "editora"){
      setEditora(e.target.value)
  }else{
    setId(parseInt(e.target.value))
  }
}

const handleChange4 = (e: ChangeEvent<HTMLInputElement>) => {
  if(e.target.name === "autores"){
      setAutores(e.target.value)
  }else{
    setId(parseInt(e.target.value))
  }
}
return (
    
  <form   onSubmit = {addTaskHandler} className={styles.form}>
    <div className={styles.input_conteiner}>
    <label htmlFor='title'>Titulo:</label>
    <input type='text' name= 'title' 
    onChange={handleChange}
    value={title}/>
    </div>

    <div className={styles.input_conteiner}>
    <label htmlFor='title'>Resumo:</label>
    <input type='text' name= 'resumo'  
    onChange={handleChange2}
    value={resumo}/>
    </div>

    <div className={styles.input_conteiner}>
    <label htmlFor='title'>Editora:</label>
    <input type='text' name= 'editora'  
    onChange={handleChange3}
    value={editora}/>
    </div>

    <div className={styles.input_conteiner}>
    <label htmlFor='title'>Autores:</label>
    <input type='text' name= 'autores' 
    onChange={handleChange4}
    value={autores}/>
    </div>


    <input type='submit' value={btnText} 
    onChange={handleChange}/>
    
    </form>
  )
};

export default TaskForm