import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function TaskDetails() {
  const params = useParams()
  const navigate = useNavigate()

  function handleBackButtonClick() {
    navigate(-1)
  }

  return (
    <div>
      <button className="button back-button" onClick={handleBackButtonClick}>
        Voltar
      </button>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum
          nisi porro tempora, commodi possimus?
        </p>
      </div>
    </div>
  )
}

export default TaskDetails
