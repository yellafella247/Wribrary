import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleLoginButton = () => {
    navigate('login')
  }

  const handleRegisterButton = () => {
    navigate('register')
  }

  return (
    <div className='content home'>
      <div className='container'>
        <h1>Wribrary</h1>
      </div>
      <div className='buttonContainer'>
        <button className='loginButton' onClick={handleLoginButton}>Login</button>
        <button className='registerButton' onClick={handleRegisterButton}>Register</button>
      </div>
    </div>
  )
}

export default Home