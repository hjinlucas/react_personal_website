import React from 'react'
import './nav.css'
import{AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="# " className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineBook/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav