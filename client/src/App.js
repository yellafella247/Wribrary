import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Texts from './components/Texts'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


// import Series from './components/Series'
// import Books from './components/Books'
// import Lounge from './components/Lounge'
// import WritingRoom from './components/WritingRoom'
// import CharacterSpa from './components/CharacterSpa'
// import LocationGuide from './components/LocationGuide'

import NotFound from './components/default/NotFound'

const App = () => {

  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
