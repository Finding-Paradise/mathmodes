import React from 'react'
import { Link } from 'react-router-dom'
import arrowIcon from '../assets/icons/arrow-right-2.svg'
import banner_img_1 from '../assets/images/six.png'
import banner_img_2 from '../assets/images/seventh.png'
import '../styles/TopBrandsBanner.css'

function TopBrandsBanner() {
  return (
    <div className="top-brands-banner">
        <h2 className='top-brands-banner--title'>From Top Brands</h2>
        <Link to={'/'}>Buy it now <img src={arrowIcon} alt="" /></Link>
        <img src={banner_img_1} alt="" className='top-brands-banner--img'/>
        <img src={banner_img_2} alt="" className='top-brands-banner--img-2'/>
      </div>
  )
}

export default TopBrandsBanner