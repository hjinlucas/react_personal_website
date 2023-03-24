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

          <p className='text-light'>Over the years, I have gained experience in programming languages such as Java, Python, HTML/CSS, and JavaScript, and I have applied these skills to develop websites and Android apps. I have also worked on various projects, including my portfolio site and an Android app.</p>
          <p className='text-light'>I have a passion for learning and am always eager to expand my knowledge base. I find the process of learning new things to be exciting, and I pride myself on my ability to pick up new skills quickly.</p>
          <p className='text-light'>My creative mindset means that I am constantly coming up with new ideas and ways to approach problems. I am committed to delivering high-quality work and always strive to exceed expectations.</p>
          <p className='text-light'>I look forward to the opportunity to work with others who share my passion for technology and creativity. If you have any questions or would like to learn more about me, please don't hesitate to get in touch.</p>
          <br />
          <p className='text-light'>Here are a few technologies I've been working with recently:</p>
          <br />
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
