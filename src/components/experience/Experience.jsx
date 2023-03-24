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
      mainText: 'Kean University - Wenzhou',
      smallIcon: IoLogoJavascript,
      details: 'test'
    },
    {
      backgroundUrl: Image2,
      mainText: 'Full Harvest Asset Management',
      smallIcon: FaPython,
    },
    {
      backgroundUrl: Image3,
      mainText: 'Youyou Sports',
      smallIcon: FaJava,
    },
    {
      backgroundUrl: Image4,
      mainText: 'Chuancheng',
      smallIcon: FaPython,
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
                mainText={exp.mainText}
                isActive={activeOption === index}
                onClick={() => setActiveOption(index)}
              />
            ))}
          </div>
          {activeExperience && (
          <div className="details-container">
          <div className="details">
                <h3>{activeExperience.mainText}</h3>
                <p>{activeExperience.details}</p>
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