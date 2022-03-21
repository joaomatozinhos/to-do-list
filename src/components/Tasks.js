import React from 'react'
import Task from './Task'

function Tasks(props) {
  return (
    <div>
      {props.tasks.map(task => (
        <Task task={task}></Task>
      ))}
    </div>
  )
}

export default Tasks
