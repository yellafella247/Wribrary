import React from 'react'
import { useNavigate } from 'react-router-dom'

import PageNavbar from './default/PageNavbar'

const Series = () => {

  const navigate = useNavigate()

  const handleAddSeries = () => {
    
  }

  return (
    <div className='content series'>
      <PageNavbar />
      <h2 className='pageTitle'>Series</h2>
      {/*Map out the series*/}
      <button className='addNewButton' onClick={handleAddSeries}>Add Series</button>
    </div>
  )
}

export default Series