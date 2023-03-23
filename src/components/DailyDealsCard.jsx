import React from 'react'
import '../styles/DailyDealsCard.css'

function DailyDealsCard(props) {
    return (
        <div className="daily-deals-card">
            <div className="daily-deals-card--img"><img src={require(`../assets/images/${props.cardImgURL}`)} alt="" /></div>
            <div className="daily-deals-card--description">
                <span className='daily-deals-card--title'>{props.cardTitle}</span>
                <div className="daily-deals-card-rev-ord-wrapper">
                    <span className='daily-deals-card--reviews'>{props.cardReviewsCount} Reviews</span>
                    <span className='daily-deals-card--orders'>{props.cardOrdersCount} orders</span>
                </div>
            </div>
            <span className='daily-deals-card--price'>Price ${props.cardPrice}</span>
        </div>
    )
}

export default DailyDealsCard