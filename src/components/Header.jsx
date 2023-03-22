import React from 'react'
import '../styles/Header.css'
import search_icon from '../assets/icons/fi-br-search.svg'
import message_icon from '../assets/icons/message_icon.svg'
import notification_icon from '../assets/icons/notification_icon.svg'
import profile_img from "../assets/images/profile.png";
function Header() {
    return (
        <header className='header'>
            <div className="name-block">
                <h2>Mikey</h2>
                <span>from top brands</span>
            </div>
            <div className="search-block">
                <div className="search">
                    <input type="text" className="searchProduct" placeholder="Search Product" />
                    <button type="submit" className="searchButton">
                        <img src={search_icon} alt="" height="18px"/>
                    </button>
                </div>
                <div className="search-block--message"><img src={message_icon} alt=""/></div>
                <div className="search-block--notification"><img src={notification_icon} alt=""/></div>
                <div className="search-block--profile"><img src={profile_img} alt=""/></div>
            </div>
        </header>
    )
}

export default Header