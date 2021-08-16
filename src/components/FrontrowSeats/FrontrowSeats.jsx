import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import Nav from '../header/Nav'
import './FrontrowSeats.scss'
import ButtonWithMouseTracking from '../@common/ButtonWithMouseTracking/ButtonWithMouseTracking'

const FrontrowSeats = (e) => {
    const [reveals, setReveals] = useState([])
    const circleRef = useRef(null)
    const onMouseMove = (e) => {
        circleRef.current?.setAttribute('cx', e.clientX)
        circleRef.current?.setAttribute('cy', e.clientY)
    }
    const onMouseDown = (e) => {
        console.log(e.button)
        if(e.button === 0 || e.button === 1){
            setReveals(prev=>[...prev, {x: (e.clientX/window.innerWidth)*100, y: (e.clientY/window.innerHeight)*100}])
            console.log((e.clientX/window.innerWidth)*100)
            console.log((e.clientY/window.innerHeight)*100);
            console.log('================');
        }
    }

    return (
        <>
            <div 
                className="yellow-container"
                onMouseMove={onMouseMove}
                onMouseDown={onMouseDown}
                >
                <Nav
                    menuClassName='blacksvg'
                    titleClassName="yellow-nav-title"
                    bgClassName="yellow-nav-bg"
                    liClassName="yellow-nav-li"
                    svgClassName="yellow-nav-svg"/>

                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink= "http://www.w3.org/1999/xlink" style={{width: "100%", height: "100%"}}>
                    <defs style={{width: "100%", height: "100%"}}>
                        {/* <clipPath style={{width: "100%", height: "100%"}}>
                            <circle id="mask-circle" cx="50%" cy="50%" r="8%" style={{fill: "#ffffff"}}/>
                            <circle id="mask-circle" cx="25%" cy="25%" r="8%" style={{fill: "#ffffff"}}/>
                        </clipPath> */}
                        <clipPath id="mask" style={{width: "100%", height: "100%"}}>
                            <circle id="mask-circle" cx="65%" cy="40%" r="20%" style={{fill: "#ffffff"}}/>
                            <circle id="mask-circle" cx="8%" cy="90%" r="14%" style={{fill: "#ffffff"}}/>
                            {reveals.map((val, key) => <circle key={'cc'+key+val.x+val.y} id="mask-circle" cx={val.x+'%'} cy={val.y+'%'} r="8%" style={{fill: "#ffffff"}} />)}
                        </clipPath>
                    </defs>
                    <g clipPath="url(#mask)">
                        <rect width="100%" height="100%" fill="#272730"/>
                        <image xmlnsXlink= "http://www.w3.org/1999/xlink" xlinkHref="https://raw.githubusercontent.com/AshenCat/speer/master/src/assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/Image4.png" width="100%" style={{objectFit: 'cover'}} />
                    </g>
                    <circle ref={circleRef} id="circle-shadow" cx="50%" cy="50%" r="8%" style={{stroke: "#ffffff", fill: "transparent", strokeWidth: "5"}} />
                </svg>
                <div className="yellow-text-container">
                    <h1 className="hero-h">Front row seats</h1>
                    <div className="hero-subtext">
                        <h2 className="hero-h">Experience concerts up close and personal.</h2>
                    </div>
                    <ButtonWithMouseTracking>SEE DEMO</ButtonWithMouseTracking>
                </div>
            </div>
        </>
    )
}

export default FrontrowSeats
