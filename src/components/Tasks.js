import React from 'react'
import Task from './Task'

function Tasks(props) {
  return (
    <ul>
      {props.tasks.map(task => (
        <Task
          task={task}
          onCompleted={props.onCompleted}
          onTaskDeleted={props.onTaskDeleted}
        ></Task>
      ))}
    </ul>
  )
}

export default Tasks
