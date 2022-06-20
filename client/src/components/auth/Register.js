import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log(formData)
      await axios.post('/api/auth/register/', formData)
      navigate('/login')
    } catch (err) {
      console.log(err)
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className="content register">
      <form className='' onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className='field'>
          <label name='username'>Username</label>
          <input type="username" name="username" className='input' placeholder='Username' value={formData.username} onChange={handleChange} />
          {errors.email && <p className='text-danger'>{errors.username}</p>}
        </div>

        <div className='field'>
          <label name='email'>Email</label>
          <input type="email" name="email" className='input' placeholder='Email' value={formData.email} onChange={handleChange} />
          {errors.email && <p className='text-danger'>{errors.email}</p>}
        </div>

        <div className='field'>
          <label name='password'>Password</label>
          <input type="password" name="password" className='input' placeholder='Password' value={formData.password} onChange={handleChange} />
          {errors.password && <p className='text-danger'>{errors.password}</p>}
        </div>

        <div className='field'>
          <label name='password_confirmation'>Password Confirmation</label>
          <input type="password" name="password_confirmation" className='input' placeholder='Password Confirmation' value={formData.password_confirmation} onChange={handleChange} />
          {errors.password_confirmation && <p className='text-danger'>{errors.password_confirmation}</p>}
        </div>

        <button type="submit" className="btn btn-success w-100 mt-4">Register</button>
      </form>
    </section>
  )
}

export default Register