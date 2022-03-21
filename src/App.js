import React, { useState } from 'react'
import Tasks from './components/Tasks'
import './task.css'

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

  return (
    <div className="container">
      <Tasks tasks={tasks}></Tasks>
    </div>
  )
}

export default App
