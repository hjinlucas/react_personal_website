import React from 'react';
import './experience.css';
// import Microsoft from '../../assets/microsoft.png';
// import Google from '../../assets/google.png';
// import Facebook from '../../assets/facebook.png';
import Microsoft from '../../assets/me_artsy_img.png';
import { FaCode, FaGlobe } from 'react-icons/fa';


const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2>2. Experience</h2>
        <hr className='hr-line' />

        <div className="experience-cards">
          <div className="experience-card">
            <div className="experience-card-image">
              <img src={Microsoft} alt="Microsoft" />
            </div>
              <div className="experience-card-hover">
                <div className="experience-card-hover-content">
                  <h3>SDE @ xxx</h3>
                  <p>January 2020 - Present</p>
                  <ul>
                    <li><FaCode /> Developed web applications using React and Node.js</li>
                    <li><FaGlobe /> Worked on improving the performance and scalability of existing applications</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Experience;

