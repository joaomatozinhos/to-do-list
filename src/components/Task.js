import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

function Task(props) {
  const navigate = useNavigate()

  function handleTaskDetailsClick() {
    navigate(`/${props.task.title}`)
  }

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
      <div className="buttons-container ">
        <button
          className="details-task-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo></CgInfo>
        </button>
        <button
          className="remove-task-button"
          onClick={() => props.onTaskDeleted(props.task.id)}
        >
          <CgClose></CgClose>
        </button>
      </div>
    </div>
  )
}

export default Task
