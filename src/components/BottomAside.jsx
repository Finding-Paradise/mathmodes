import React from 'react'
import '../styles/BottomAside.css'
import { Link } from 'react-router-dom'
import arrowIcon from '../assets/icons/arrow-right.svg'
import aibika from '../assets/images/aibek.jpg'
import marsel from '../assets/images/mars.png'
import ariet from '../assets/images/ariet.jpg'
import osel from '../assets/images/osel.jpg'

function BottomAside() {
  return (
    <div className="bottom-aside">
        <h2 className='bottom-aside--title'>Explore Popular Categories</h2>
        <Link to={'/'}>See all <img src={arrowIcon} alt="" /></Link>
        <div className="bottom-aside--block">
          <div className="bottom-aside--block-left">
            <img src={aibika} alt="" />
            <img src={marsel} alt="" />
            <img src={ariet} alt="" />
            <img src={osel} alt="" />
          </div>
          <div className="bottom-aside--block-right">
            <h4>Newest Sellers</h4>
            <p>4,600+ Orders & reviews</p>
          </div>
        </div>
    </div>
  )
}

export default BottomAside