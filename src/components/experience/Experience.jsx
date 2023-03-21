import React, { useState }  from 'react'
import './experience.css'
import Image1 from '../../assets/testImage2.png'
import Image2 from '../../assets/testImage2.png'
import { FaWalking, FaSnowflake } from 'react-icons/fa';


const Option = ({ backgroundUrl, iconComponent, mainText, subText, isActive, onClick }) => (
  <div
    className={`option ${isActive ? 'active' : ''}`}
    style={{ '--optionBackground': `url(${backgroundUrl})` }}
    onClick={onClick}
  >
    <div className="icon">
        <iconComponent />
      </div>
    <div className="main">{mainText}</div>
    <div className="sub">{subText}</div>
  </div>
);

const Experience = () => {
  const [activeOption, setActiveOption] = useState(0);

  const experiences = [
    {
      backgroundUrl: Image1,
      iconComponent: FaWalking,
      mainText: 'Blonkisoaz',
      subText: 'Omuke trughte a otufta',
    },
    {
      backgroundUrl: Image2,
      iconComponent: FaSnowflake,
      mainText: 'Oretemauw',
      subText: 'Omuke trughte a otufta',
    },
    {
      backgroundUrl: Image2,
      iconComponent: FaSnowflake,
      mainText: 'Oretemauw',
      subText: 'Omuke trughte a otufta',
    },
    {
      backgroundUrl: Image2,
      iconComponent: FaSnowflake,
      mainText: 'Oretemauw',
      subText: 'Omuke trughte a otufta',
    },
    // Add more experiences here as needed
  ];


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
                iconComponent={exp.iconComponent}
                mainText={exp.mainText}
                subText={exp.subText}
                isActive={activeOption === index}
                onClick={() => setActiveOption(index)}
              />
            ))}
          </div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Experience