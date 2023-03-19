import React from 'react'
import './nav.css'
import{AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <div>
      <a href="# "><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineBook/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </div>
  )
}

export default Nav