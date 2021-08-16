import React from 'react'
import Button from '../@common/Button/Button'
import Nav from '../header/Nav'
import './Perks.scss'

const Perks = () => {
    return (
        <div className="perks-container">
            <Nav 
                titleClassName="hero-nav-title"
                bgClassName="hero-nav-bg"
                liClassName="hero-nav-li"
                svgClassName="hero-nav-svg"
                />
            <Button className="perks-btn">
                Try it now!
            </Button>
            <div className="perks-text">
                <h1 className="perks-h">PERKS</h1>
                <div className="perks-boxes">
                    <div className="perks-box">
                        <h2 className="perks-box-color r">Subscription Payment Model</h2>
                        <div className="perks-box-text">No commitment, Cancel anytime. Never worry about forgetting payment again!</div>
                    </div>
                    <div className="perks-box">
                        <h2 className="perks-box-color c">No Fee Cancelation Policy</h2>
                        <div className="perks-box-text">No commitment, Cancel anytime. Never worry about forgetting payment again!</div>
                    </div>
                    <div className="perks-box">
                        <h2 className="perks-box-color y">Subscription Payment Model</h2>
                        <div className="perks-box-text">No commitment, Cancel anytime. Never worry about forgetting payment again!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perks
