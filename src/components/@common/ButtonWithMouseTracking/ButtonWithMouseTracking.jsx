import React, { useRef } from 'react'
import './ButtonWithMouseTracking.scss'

function ButtonWithMouseTracking(props) {
    const btnRef = useRef(null)
    const effRef = useRef(null)

    const onBtnHover = () => {
        btnRef.current.onmousemove = (e) => {
            var x = e.clientX;
            var y = e.clientY;
            console.log()
            effRef.current?.style.setProperty('--x', x + 'px')
            effRef.current?.style.setProperty('--y', y + 'px')
            effRef.current?.classList.add('btn2-effect-working')
        }
    }

    const onBtnExit = () => {
        effRef.current.classList.remove('btn2-effect-working')
    }
    
    return (
        <div 
            id={props.id}
            ref={btnRef}
            role="button"
            onClick={props.onClick}
            className={`btn2 ${props.className ?? ''}`}
            tabIndex="1"
            onMouseEnter={onBtnHover}
            onMouseLeave={onBtnExit}
            >
            <span>{props.children}</span>
            <div 
                className="btn2-effect"
                ref={effRef} />
        </div>
    )
}



export default ButtonWithMouseTracking

