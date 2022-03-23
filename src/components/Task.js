import React from 'react'

function Task(props) {
  return (
    <li
      className="task-container"
      style={props.task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
      onClick={() => props.onCompleted(props.task.id)}
    >
      {props.task.title}
    </li>
  )
}

export default Task
