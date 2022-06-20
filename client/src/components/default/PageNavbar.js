import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated, getPayload } from '../../helpers/auth'

const PageNavbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem('sei-63-wribrary')
    navigate('/')
  }

  const handleNavHome = () => {
    window.localStorage.removeItem('sei-63-wribrary')
    navigate('/')
  }

  return (
    <nav>
      <h1 onClick={handleNavHome}>Wribrary</h1>
      <button onClick={handleLogout}>Log out</button>
    </nav>
  )
}

export default PageNavbar