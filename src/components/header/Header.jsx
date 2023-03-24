import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderContact from './HeaderContact'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Hao Jin</h1>
        <h5 className='text-light'>Hi, my name is Hao Jin, and I am a computer science student at Northeastern University. </h5>
        <h5 className='text-light'>As a full stack developer, I am always excited to create new things and explore the latest technologies.</h5>
        <CTA />
        <HeaderContact />

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header