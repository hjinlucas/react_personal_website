import React from 'react'
import './about.css'
import { FaJava, FaJs, FaReact, FaPython } from 'react-icons/fa';
import profilePhoto from '../../assets/profile-pic-3.png';

const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='about-content'>
          <h2>1. About Me</h2>
          <hr className='hr-line' />

          <p className='text-light'>Hello! My name is Hao Jin and I'm a full-stack developer with experience in building web applications using technologies such as React, Node.js, and MongoDB. My passion for programming started when I was in high school and since then, I've been constantly learning new technologies and programming languages to improve my skills.</p>
          <p className='text-light'>Here are a few technologies I've been working with recently:</p>

          <div className='tech-list'>
            <div className='tech-col'>
              <FaJava className='tech-icon' />
              <span>Java</span>
            </div>
            <div className='tech-col'>
              <FaJs className='tech-icon' />
              <span>JavaScript</span>
            </div>
            <div className='tech-col'>
              <FaReact className='tech-icon' />
              <span>React</span>
            </div>
            <div className='tech-col'>
              <FaPython className='tech-icon' />
              <span>Python</span>
            </div>
          </div>

        </div>

        <div className='about-image'>
          <img src={profilePhoto} alt='Hao Jin' />
        </div>

      </div>
    </section>
  )
}

export default About;
