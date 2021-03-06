import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import TaskDetails from './components/TaskDetails'
import './task.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <h1>My Tasks</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:taskTitle" element={<TaskDetails />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
