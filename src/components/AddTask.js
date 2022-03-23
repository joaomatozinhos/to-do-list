import React, { useState } from 'react'

function AddTask(props) {
  const [inputData, setInputData] = useState('')

  function handleInputChange(e) {
    let task = e.target.value
    setInputData(task)
  }

  return (
    <div className="add-task-container">
      <form>
        <input
          type="text"
          className="add-task-input"
          onChange={handleInputChange}
          value={inputData}
        ></input>
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            props.handleAddTask(inputData)
            setInputData('')
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  )
}

export default AddTask
