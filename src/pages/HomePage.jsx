import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import '../pages/HomePage.css'

function HomePage() {
  return (
    <div className='home-page'>
        <Navbar />
        <Main />
    </div>
  )
}

export default HomePage