import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'

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
      <button className="details-task-button">
        <CgInfo></CgInfo>
      </button>
      <button
        className="remove-task-button"
        onClick={() => props.onTaskDeleted(props.task.id)}
      >
        <CgClose></CgClose>
      </button>
    </div>
  )
}

export default Task
