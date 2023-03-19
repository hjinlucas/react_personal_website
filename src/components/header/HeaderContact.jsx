import React from 'react'
import {AiOutlineGithub, AiFillTwitterCircle} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const HeaderContact = () => {
  return (
    <div className='header__contact'>
        <a href="https://github.com/hjinlucas" target="blank"><AiOutlineGithub/></a>
        <a href="https://www.linkedin.com/in/lucas-jinhao/" target="blank"><BsLinkedin/></a>
        <a href="https://twitter.com/panicblues" target="blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderContact