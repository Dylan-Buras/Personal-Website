import React from 'react'
import {motion} from 'framer-motion'

import {Images} from '../../constants'
import './header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      durantion: 1,
      ease: 'easeInOut'
    }
  }
}

const header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:.8}}
        className='app__header-info'
        >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{marginLeft:20, marginRight:20}}>
                <p className = 'p-text'> Hello, I'm</p>
                <h1 className='head-text'> Dylan </h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              {/* put whatever you do here */}
            <p className = 'p-text'> Software Engineer </p>
            <p className = 'p-text'> Freelance </p>
            </div>
          </div>
      </motion.div>
      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:.8, delayChildren: 0.5}}
        className='app__header-img'
        >
          <img src={Images.profile} alt='profile_bg'/>
          <motion.img
            whileInView={{scale: [0,1]}}
            transition = {{duration:1, ease: 'easeInOut'}}
            src = {Images.circle}
            alt = 'profile-cirlce'
            className='overlay_circle'
          />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView = {scaleVariants.whileInView}
          className='app__header-circles'
        >
          {/*change these technology images to thing I actually know*/}
          {[Images.flutter,Images.redux,Images.sass].map((circle,index)=>(
            <div className='circle-cmp app__flex' key = {`cirlce-${index}`}>
              <img src = {circle} alt = 'circle'/>
            </div>
          ))}
        </motion.div>
    </div>
  )
}

export default header
