import React from 'react'

function Task(props) {
  return (
    <div className="div-task-container">
      <li
        className="task-container"
        style={
          props.task.completed ? { borderLeft: '6px solid chartreuse' } : {}
        }
        onClick={() => props.onCompleted(props.task.id)}
      >
        {props.task.title}
      </li>
      <button
        className="remove-task-button"
        onClick={() => props.onTaskDeleted(props.task.id)}
      >
        X
      </button>
    </div>
  )
}

export default Task
