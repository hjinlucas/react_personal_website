import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiFillCode} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('# ')
  return (
    <nav>
      {/* onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''
        display active status when user choose each one of these icons in navbar */}
      <a href="# " onClick={() => setActiveNav('# ')} className={activeNav === '# ' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#proj" onClick={() => setActiveNav('#proj')} className={activeNav === '#proj' ? 'active' : ''}><AiFillCode/></a>
    </nav>
  )
}

export default Nav