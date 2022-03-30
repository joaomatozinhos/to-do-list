import React from 'react'
import { useParams } from 'react-router-dom'

function TaskDetails() {
  const params = useParams()
  console.log(params)

  return (
    <div>
      <button className="button back-button">Voltar</button>
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
