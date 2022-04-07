import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

function Home() {
  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.cypress.io/todos?_limit=10')
  //     .then(response => response.json())
  //     .then(data => {
  //       setTasks(data)
  //     })
  // }, [])

  useEffect(() => {
    if (localStorage.getItem('savedTasks')) {
      let savedTasks = JSON.parse(localStorage.getItem('savedTasks'))
      setTasks(savedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('savedTasks', JSON.stringify(tasks))
  }, [tasks])

  function handleAddTask(taskTitle) {
    if (taskTitle !== '') {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: taskTitle,
          completed: false
        }
      ])
    }
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

  function onTaskDeleted(taskID) {
    let filteredTasks = tasks.filter(task => task.id !== taskID)
    setTasks(filteredTasks)
  }

  return (
    <div>
      <AddTask handleAddTask={handleAddTask}></AddTask>
      <Tasks
        tasks={tasks}
        onCompleted={onCompleted}
        onTaskDeleted={onTaskDeleted}
      ></Tasks>
    </div>
  )
}

export default Home
