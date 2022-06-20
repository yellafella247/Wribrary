import React from 'react'
import { useNavigate } from 'react-router-dom'

const LocationGuide = () => {

  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate('/lounge') //! Change
  }

  return (
    <div className='content locationGuide'>
      <button className='backButton' onClick={handleBackButton}>Back</button>
      <h2 className='pageTitle'>Location Guide</h2>
      <div className='writerContainer'>
        <section className='locationSection'>
          {/*Map characters */}
        </section>
        <section className='editSection'>
          <div className='leftSide'>
            <div className='field'>
              <label name='name'>Name</label>
              <input type='text' name='name'></input>
            </div>
            <div className='field'>
              <label name='type'>Type</label>
              <select name='type' />
            </div>
            <div className='field'>
              <label name='climate'>Climate</label>
              <input type='text' name='Climate'></input>
            </div>
            <div className='field'>
              <label name='other'>Other</label>
              <input type='text' name='other'></input>
            </div>
          </div>
          <div className='field'>
            <label name='description'>Description</label>
            <textarea name='description'></textarea>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LocationGuide