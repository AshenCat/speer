import React, {useState} from 'react'
import './Sound.scss'
import src from '../../assets/audios/sample.wav'
import Nav from '../header/Nav';
import ButtonWithMouseTracking from '../@common/ButtonWithMouseTracking/ButtonWithMouseTracking';
import Speaker1 from '../../assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/medium17.png'
import Speaker2 from '../../assets/images/IDIDNTKNOWYOUCANDOWNLOADASSETSOMFG/medium27.png'
import { useRef } from 'react';

function Sound() {
    const [playing, setPlaying] = useState(false);
    const [speakerHovered, setSpeakerHovered] = useState(false);
    const divRef = useRef(null);
    let timeout;
    const onMouseMove = (e) => {
        divRef.current?.classList.add('sound-flt-div-moving')
        divRef.current?.classList.remove('sound-flt-div-not-moving')
        var x = e.clientX;
        var y = e.clientY;
        divRef.current?.style.setProperty('--x', x-75 + 'px')
        divRef.current?.style.setProperty('--y', y-90 + 'px')
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            divRef.current?.classList.add('sound-flt-div-not-moving')
            divRef.current?.classList.remove('sound-flt-div-moving')
        }, 100);
    }
    const onMouseLeave = () => {
    }

    const toggle = () => {
        if(speakerHovered) {
            if(!playing) {
                document.getElementById("audio").play();
            } else {
                document.getElementById("audio").pause();
            }
            setPlaying(prev => !prev)
        }
    }

    return (
        <div 
            className="sound"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onClick={toggle}>
                
            <div
            onClick={toggle} className="sound-flt-div" ref={divRef}>
                <span>📢{speakerHovered && '🎶'}</span>
            </div>
            <Nav 
                svgOpen="soundSvgOpen"
                titleOpen="soundTitleOpen"
                menuClassName='blacksvg'
                titleClassName="sound-nav-title"
                bgClassName="sound-nav-bg"
                liClassName="sound-nav-li"
                svgClassName="sound-nav-svg"
                />
            <audio id="audio">
                <source src={src} type="audio/mpeg" />
            </audio>

            <div className="sound-container">
                <div className="right">
                    <img 
                        onMouseOver={()=>setSpeakerHovered(true)}
                        onMouseLeave={()=>setSpeakerHovered(false)}
                        className="speaker-img sleft" src={Speaker1} alt="speaker" />
                    <img 
                        onMouseOver={()=>setSpeakerHovered(true)}
                        onMouseLeave={()=>setSpeakerHovered(false)}
                        className="speaker-img sright" src={Speaker2} alt="speaker" />
                </div>
                <div className="left">
                    <h1 className="sound-h">Superior Sound</h1>
                    <h2 className="sound-h">Experience live versions of your favourite songs.</h2>
                    <ButtonWithMouseTracking id={'btn2'} className="sound-btn-demo">See Demo</ButtonWithMouseTracking>
                </div>
            </div>

        </div>
    )
}

export default Sound
