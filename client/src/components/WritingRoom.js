import React from 'react'
import { useNavigate } from 'react-router-dom'

const WritingRoom = () => {

  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate('/lounge') //! Change
  }

  return (
    <div className='content writingRoom'>
      <button className='backButton' onClick={handleBackButton}>Back</button>
      <h2 className='pageTitle'>Writing Room</h2>
      <div className='writerContainer'>
        <section className='chatperSection'>
          {/*Map chapters */}
        </section>
        <section className='sectionSection'>
          {/*Map sections */}
        </section>
        <section className='writingSection'>
          <h3>Section Title</h3>
          <textarea></textarea>
        </section>
      </div>
    </div>
  )
}

export default WritingRoom