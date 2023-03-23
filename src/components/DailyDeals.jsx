import React from 'react'
import '../styles/DailyDeals.css'
import DailyDealsCard from './DailyDealsCard'
import { Link } from 'react-router-dom'
import arrowIcon from '../assets/icons/arrow-right.svg'
import dataForSmall from '../productSmallData'

function DailyDeals() {

    let cardElements = dataForSmall.map(card => {
        return <DailyDealsCard key={card.id} cardImgURL={card.imageURL} cardTitle={card.title} cardReviewsCount={card.reviewsCount} cardOrdersCount={card.ordersCount} cardPrice={card.price} />
    })

    return (
        <div className="daily-deals-wrapper">
            <div className="daily-deals-wrapper--title-wrapper">
                <h2 className='daily-deals-wrapper--title'>Daily Deals</h2>
                <Link to={'/'} className='daily-deals-wrapper--link'>View all <img src={arrowIcon} alt="" /></Link>

            </div>
            {cardElements}
        </div>
    )
}

export default DailyDeals