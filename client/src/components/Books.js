import React from 'react'
import { useNavigate } from 'react-router-dom'

const Books = () => {

  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate('/series') //! Change
  }

  const handleAddBook = () => {

  }

  return (
    <div className='content books'>
      <button className='backButton' onClick={handleBackButton}>Back</button>
      <h2 className='pageTitle'>Books</h2>
      {/*Map out the books*/}
      <button className='addNewButton' onClick={handleAddBook}>Add Series</button>
    </div>
  )
}

export default Books