import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Nav from '../header/Nav'
import Distortion from './../../assets/images/distortion.jpg'
import Button from '../@common/Button/Button'
import './hero.scss'
import { images } from './images'
import {wrap} from '@popmotion/popcorn'

// function 

function Hero() {
    const [[imgState, direction], setImgState] = useState([0,0])
    const btnRef0 = useRef(null)
    const btnRef1 = useRef(null)
    const btnRef2 = useRef(null)

    const imageIndex = wrap(0, images.length, imgState)

    useEffect(()=>{
        window.interval = setInterval(
            () => setImgState(prev => {
                const [istate, d] = prev
                if (istate === 2) {
                    return [0, d]
                }
                return [istate+1, d];
            }),
            10000
        )
        return () => {
          clearInterval(window.interval)
        }
    }, [])

    useEffect(()=>{
        if(imgState === 0) {
            btnRef0.current.classList.add('hero-slider-btn-filled')
            btnRef1.current.classList.remove('hero-slider-btn-filled')
            btnRef2.current.classList.remove('hero-slider-btn-filled')
        }
        else if(imgState === 1) {
            btnRef0.current.classList.remove('hero-slider-btn-filled')
            btnRef1.current.classList.add('hero-slider-btn-filled')
            btnRef2.current.classList.remove('hero-slider-btn-filled')
        }
        else if(imgState === 2) {
            btnRef0.current.classList.remove('hero-slider-btn-filled')
            btnRef1.current.classList.remove('hero-slider-btn-filled')
            btnRef2.current.classList.add('hero-slider-btn-filled')
        }
    }, [imgState])

    return (
        <>
            {/* <AnimatePresence exitBeforeEnter> */}
                <div className="hero-container">
                    <Nav 
                        titleClassName="hero-nav-title"
                        bgClassName="hero-nav-bg"
                        liClassName="hero-nav-li"
                        svgClassName="hero-nav-svg"
                        />
                    {/* <img ref={distortionRef} className="imageDistortion" src={Distortion} alt="distortion" /> */}
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            className="concert-img"
                            key={imgState} 
                            src={images[imageIndex]} 
                            custom={direction}
                            initial={{
                                opacity: 0, 
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                opacity: {duration: 1}
                            }}
                             />
                    </AnimatePresence>
                    <div className="hero-text-container">
                        <h1 className="hero-h">Interactive Concert Experience</h1>
                        <div className="hero-subtext">
                            <h2 className="hero-h">Experience your favorite artists like never before from the comfort of your own home.</h2>
                        </div>
                        <Button>TRY IT NOW</Button>
                    </div>
                    

                    <div className="hero-slider-btn-container">
                        <div ref={btnRef0} role="button" className="hero-slider-btn" onClick={()=>setImgState([0, direction])}></div>
                        <div ref={btnRef1} role="button" className="hero-slider-btn" onClick={()=>setImgState([1, direction])}></div>
                        <div ref={btnRef2} role="button" className="hero-slider-btn" onClick={()=>setImgState([2, direction])}></div>
                    </div>
                </div>
            {/* </AnimatePresence> */}
        </>
    )
}

export default Hero
