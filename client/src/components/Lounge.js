import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Lounge = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)

  const handleBackButton = () => {
    navigate('/series') //! Change
  }

  const handleWritingRoomButton = () => {
    navigate('/writingRoom') //! Change
  }

  const handleCharaterSpaButton = () => {
    navigate('/characterSpa') //! Change
  }

  const handleLocationGuideButton = () => {
    navigate('/locationGuide') //! Change
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/login/', formData) //! Change
      console.log('Submitted')
      navigate('/compare')
    } catch (err) {
      console.log(err)
      setErrors(true)
    }
  }

  return (
    <div className='content books'>
      <button className='backButton' onClick={handleBackButton}>Back</button>
      <h2 className='pageTitle'>Lounge</h2>
      <form onSubmit={handleSubmit}>
        <div className='leftSide'>
          <div className='field'>
            <label name='bookTitle'>Book Title</label>
            <input name='bookTitle' type='text' required value={formData.title} />
          </div>
          <div className='field'>
            <label name='summary'>Summary / Blirb</label>
            <input name='summary' type='text' required value={formData.summary} />
          </div>
          <div className='field'>
            <label name='genre'>Genre</label>
            <input name='genre' type='text' required value={formData.Genre} />
          </div>
          <div className='field'>
            <label name='characters'>Characters</label>
            <input name='characters' type='text' required value={formData.characters} />
          </div>
          <div className='field'>
            <label name='image'>Themed Image</label>
            <input name='image' type='text' required value={formData.image} />
          </div>
          <img src={formData.image}/>
        </div>
        <button type='submit' className='backButton' onClick={handleBackButton}>Back</button>
      </form>
      <button className='writingRoomButton' onClick={handleWritingRoomButton}>Add Series</button>
      <button className='characterSpaButton' onClick={handleCharaterSpaButton}>Add Series</button>
      <button className='LocationGuideButton' onClick={handleLocationGuideButton}>Add Series</button>
    </div>
  )
}

export default Lounge