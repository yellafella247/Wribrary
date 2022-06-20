import React from 'react'
import { useNavigate } from 'react-router-dom'

const CharacterSpa = () => {

  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate('/lounge') //! Change
  }

  return (
    <div className='content characterSpa'>
      <button className='backButton' onClick={handleBackButton}>Back</button>
      <h2 className='pageTitle'>Character Spa</h2>
      <div className='writerContainer'>
        <section className='characterSection'>
          {/*Map characters */}
        </section>
        <section className='editSection'>
          <div className='leftSide'>
            <div className='field'>
              <label name='name'>Name</label>
              <input type='text' name='name'></input>
            </div>
            <div className='field'>
              <label name='age'>Age</label>
              <input type='number' name='age'></input>
            </div>
            <div className='field'>
              <label name='home'>Home</label>
              <input type='text' name='home'></input>
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

export default CharacterSpa