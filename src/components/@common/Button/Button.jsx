import React from 'react'
import './Button.scss'

const Button = (props) => {
    return (
        <div role="button" 
            className={`btn-container ${props.className ?? ''}`} 
            tabIndex="1"
            onClick={props.onClick}>
            <div className="btn-rgb-lights">{props.children}</div>
        </div>
    )
}

export default Button
