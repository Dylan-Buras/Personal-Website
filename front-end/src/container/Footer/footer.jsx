import React, {useState} from 'react'

import {Images} from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import {client} from '../../client'

import './footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({name:'',email:'',message:''})
  const [isFormSubmitted,setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData

  const handleChangeInput = (e) =>{
    const{name,value} = e.target

    setFormData({...formData, [name]:value})
  }

  const handleSubmit = () => {
    setLoading(true)

    setLoading(false)
  }

  return (
    <>
      <h2 className='head-text'>Take a coffee and chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={Images.email} alt="email" />
          <a href='mailto:dylan.buras@gmail.com' className='p-text'>Dylan.Buras@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={Images.mobile} alt="mobile" />
          <a href='tel: +1 (346) 386-3345' className='p-text'>+1 (346) 386-3345</a>
        </div>
      </div>

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' name='name' placeholder='Your Name' value = {name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' name='email' placeholder='Your Email' value = {email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name={message}
            onChange={handleChangeInput} />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' :'Send Message'}</button>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
