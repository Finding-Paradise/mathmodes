import React from 'react'
import '../styles/Aside.css'
import DailyDeals from './DailyDeals'
import TopBrandsBanner from './TopBrandsBanner'

function Aside() {
  return (
    <aside className='aside'>
      <TopBrandsBanner/>
      <DailyDeals />
    </aside>
  )
}

export default Aside