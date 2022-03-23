import React, { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './task.css'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React JS',
      completed: false
    },
    {
      id: '2',
      title: "Ler 10 páginas do livro 'Código Limpo'",
      completed: true
    }
  ])

  function handleAddTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false
      }
    ])
  }

  function onCompleted(taskID) {
    let updateTasks = tasks.map(task => {
      if (task.id === taskID) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(updateTasks)
  }

  return (
    <div className="container">
      <AddTask handleAddTask={handleAddTask}></AddTask>
      <Tasks tasks={tasks} onCompleted={onCompleted}></Tasks>
    </div>
  )
}

export default App
