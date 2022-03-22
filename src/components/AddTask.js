import React, { useState } from 'react'

function AddTask(props) {
  const [inputData, setInputData] = useState('')

  function handleInputChange(e) {
    let task = e.target.value
    setInputData(task)
  }

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="add-task-input"
        onChange={handleInputChange}
        value={inputData}
      ></input>
      <button
        className="button"
        onClick={() => {
          props.handleAddTask(inputData)
        }}
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddTask
