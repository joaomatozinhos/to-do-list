import React from 'react'

function Task(props) {
  return (
    <div className="task-container">
      <ul>
        <li>{props.task.title}</li>
      </ul>
    </div>
  )
}

export default Task
