import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('sei-63-wribrary', token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      console.log('Submitted')
      navigate('/texts')
    } catch (err) {
      console.log(err)
      setErrors(true)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(false)
  }

  return (
    <section className="content login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='field'>
          <label name="email">Email</label>
          <input type="email" name="email" className='input' placeholder='Email' required value={formData.email} onChange={handleChange} />
        </div>
        <div className='field'>
          <label name="password">Password</label>
          <input type="password" name="password" className='input' placeholder='Password' required value={formData.password} onChange={handleChange} />
        </div>
        {errors && <p className=''>Unauthorised</p>}
        <button type="submit" className="">Login</button>
      </form>
    </section>
  )
}

export default Login