import React from 'react'
import '../styles/Main.css'
import Aside from './Aside'
import Header from './Header'
import MainContent from './MainContent'
function Main() {
  return (
    <main className='main'>
      <Header />
      <div className="wrapper">
        <MainContent />
        <Aside />
      </div>
    </main>
  )
}

export default Main