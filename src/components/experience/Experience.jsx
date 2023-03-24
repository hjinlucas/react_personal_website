import React, { useState }  from 'react'
import './experience.css'
import Image1 from '../../assets/cardImage1.jpg'
import Image2 from '../../assets/cardImage2.jpg'
import Image3 from '../../assets/cardImage3.png'
import Image4 from '../../assets/cardImage4.jpg'
import { IoLogoJavascript } from 'react-icons/io';
import { FaPython, FaJava } from 'react-icons/fa';


const Option = ({ backgroundUrl, mainText, isActive, onClick, smallIcon: SmallIcon, details }) => (
  <div
    className={`option ${isActive ? 'active' : ''}`}
    style={{ '--optionBackground': `url(${backgroundUrl})` }}
    onClick={onClick}
  >

    <div className="icon-container">
      <div className="circle-background">
        <SmallIcon className="icon-small" />
      </div>
    </div>

    <div className="main">{mainText}</div>
    <div className="details">{details}</div>
  </div>
);

const Experience = () => {
  const [activeOption, setActiveOption] = useState(0);

  const experiences = [
    {
      backgroundUrl: Image1,
      mainText: 'Kean University Wenzhou - Tech Assistant',
      smallIcon: IoLogoJavascript,
      details: [
        "> Constructed an internal website for university's polytechnic labs operating HTML, CSS, JavaScript, resulting in a 30% increase in lab usage and a nearly 30% reduction in wait time.",
        "> Constructed an internal website for university's polytechnic labs operating HTML, CSS, JavaScript, resulting in a 30% increase in lab usage and a nearly 30% reduction in wait time.",
        "> Coordinated with external IOT companies to perform large-scale IOT systems for university's labs."
      ]
    },
    {
      backgroundUrl: Image2,
      mainText: 'Full Harvest Asset Management - Data Analyst Intern',
      smallIcon: FaPython,
      details: [
        "> Conducted analysis of investment portfolios and buy-sell strategies using Python and statistical modeling techniques.",
        "> Developed a new strategy for analyzing investment performance that was adopted by the company after modification.",
        "> Developed a new strategy for analyzing investment performance that was adopted by the company after modification."
      ]
    },
    {
      backgroundUrl: Image3,
      mainText: 'Youyou Sports - Software Engineering Intern',
      smallIcon: FaJava,
      details: [
        "> Developed a WeChat app using Java, HTML and CSS, resulting in a 30% increase in deal closing.",
        "> Accomplished key features such as product browsing, content display, and in-app chat functionality.",
        "> Associated with backend team to integrate databases, and to ensure a seamless user experience."
      ]
    },
    {
      backgroundUrl: Image4,
      mainText: 'Chuancheng',
      smallIcon: FaPython,
      details: [
        "> Analyzed the operating conditions of competitors in different business districts.",
        "> Improved the operation strategy of stores in the same business district."
      ]
    },
    // Add more experiences here as needed
  ];


  const activeExperience = experiences[activeOption];

  return (
    <section id='experience'>
      <div className='container'>
      <div className='experience-content'>
        <h2>2. Experience</h2>
        <hr className='hr-line' />

        <div className="experience-wrapper">
        <div className="options">
            {experiences.map((exp, index) => (
              <Option
                key={index}
                backgroundUrl={exp.backgroundUrl}
                smallIcon={exp.smallIcon}
                
                isActive={activeOption === index}
                onClick={() => setActiveOption(index)}
              />
            ))}
          </div>
          </div>
          {/* details of experience cards */}
          <div className="details-wrapper">
          {activeExperience && (
            <div className="details-container">
            <div className="details">
              <h3>{activeExperience.mainText}</h3>
              {activeExperience.details.map((line, index) => (
                    <p key={index}>{line}</p>
                    ))}
              </div>
            </div>
           )}
          </div>
            
      </div>

          
      </div>
    </section>
  )
}

export default Experience