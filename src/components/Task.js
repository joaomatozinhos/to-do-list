import React from 'react'

function Task(props) {
  return <li className="task-container">{props.task.title}</li>
}

export default Task
