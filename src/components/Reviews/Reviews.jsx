import React from 'react'
import Nav from '../header/Nav'
import './Reviews.scss'
import Speaker1 from '../../assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/SmallSpeaker1-03.png'
import Speaker2 from '../../assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/SmallSpeaker2-03.png'
import Stars from '../../assets/images/5_star.png'

function Reviews() {
    return (
        <>
        <Nav 
            titleClassName="review-nav-title"
            bgClassName="review-nav-bg"
            liClassName="review-nav-li"
            svgClassName="review-nav-svg" />
        <div className="reviews-container">
            <div className="reviews-speakers">
                <img src={Speaker1} alt="aa" className="reviews-speakers-img rsil"/>
                <img src={Speaker2} alt="aa" className="reviews-speakers-img rsir"/>
            </div>
            <div className="reviews-text">
                <h1 className="reviews-h">REVIEWS</h1>
                <div className="reviews-boxes">
                    <div className="reviews-box">
                        <div className="reviews-rating"><img src={Stars} alt="stars?" width="100%" /></div>
                        <h2 className="reviews-artist">Artist</h2>
                        <h3 className="reviews-testimonials">"Love it, it's the best. I can't live without it!"</h3>
                    </div>
                    <div className="reviews-box">
                        <div className="reviews-rating"><img src={Stars} alt="stars?" width="100%" /></div>
                        <h2 className="reviews-artist">Producer</h2>
                        <h3 className="reviews-testimonials">"Love it, it's the best. I can't live without it!"</h3>
                    </div>
                    <div className="reviews-box">
                        <div className="reviews-rating"><img src={Stars} alt="stars?" width="100%" /></div>
                        <h2 className="reviews-artist">Music Fan</h2>
                        <h3 className="reviews-testimonials">"Love it, it's the best. I can't live without it!"</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Reviews
