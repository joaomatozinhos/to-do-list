import React from 'react'
import Task from './Task'

function Tasks(props) {
  return (
    <ul>
      {props.tasks.map(task => (
        <Task task={task}></Task>
      ))}
    </ul>
  )
}

export default Tasks
