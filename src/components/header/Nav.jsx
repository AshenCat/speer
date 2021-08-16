import React from 'react'
import './Nav.scss'
import {ReactComponent as Menu} from './../../assets/images/Menu.svg'
import { motion, useCycle } from 'framer-motion'
import NavItems from './NavItems';

function Nav(props) {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const navbg = {
        open: {
            clipPath: `circle(240px at 50px 50px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
          clipPath: "circle(0px at 50px 50px)",
          transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    const variants = {
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };

    return (
        <>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                style={isOpen ? {} : {
                    transitionDelay: '1s',
                    width: '100px', 
                    height: '100px', 
                    overflow: 'hidden'
                }}>
                <motion.div 
                    className={props.bgClassName ? `background ${props.bgClassName}` : 'background'} 
                    variants={navbg} />
                <motion.ul 
                    variants={variants} className="ulhead">
                    <NavItems 
                        className={props.liClassName}
                        isOpen={isOpen} 
                        toggleOpen={toggleOpen} />
                </motion.ul>
                <div 
                    role="button" 
                    onClick={()=>toggleOpen()} 
                    className={props.svgClassName ? `menubutton ${props.svgClassName}`: `menubutton`}
                    tabIndex="1"
                    >
                    <Menu className={isOpen ? '': props.menuClassName} />
                </div>
            </motion.nav>
            <h1 className={props.titleClassName ? `nav-title ${props.titleClassName}`: 'nav-title'}>EXP|CON</h1>
        </>
    )
}

export default Nav
