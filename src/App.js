import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import TaskDetails from './components/TaskDetails'
import './task.css'

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Minhas Tarefas</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:taskTitle" element={<TaskDetails />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
