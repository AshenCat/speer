import { motion } from 'framer-motion';
import React from 'react'

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      },
      originX: 0
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

function NavItems({toggleOpen, className}) {
    return <>
        <motion.div
            role="button"
            variants={variants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={className ? `lihead ${className}` : 'lihead'}
            onClick={()=>toggleOpen()}
            >
            <h2 className="listItems">What is it</h2>
        </motion.div>
        <motion.div
            role="button"
            variants={variants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={className ? `lihead ${className}` : 'lihead'}
            onClick={()=>toggleOpen()}
            >
            <h2 className="listItems">Perks</h2>
        </motion.div>
        <motion.div
            role="button"
            variants={variants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={className ? `lihead ${className}` : 'lihead'}
            onClick={()=>toggleOpen()}
            >
            <h2 className="listItems">Pricing</h2>
        </motion.div>
    </>
}

export default NavItems
