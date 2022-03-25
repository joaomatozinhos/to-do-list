import React from 'react'

function Task(props) {
  return (
    <li
      className="task-container"
      style={props.task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
      onClick={() => props.onCompleted(props.task.id)}
    >
      {props.task.title}
      <button
        className="remove-task-button"
        onClick={() => props.onTaskDeleted(props.task.id)}
      >
        X
      </button>
    </li>
  )
}

export default Task
