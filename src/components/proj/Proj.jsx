import React from 'react';
import './proj.css';
import img_project1 from '../../assets/img_project1.png';
import img_project2 from '../../assets/img_project2.png';
import img_project3 from '../../assets/img_project3.png';
import { AiFillGithub } from 'react-icons/ai';



const Proj = () => {
  return (
    <section id='proj'>
      <div className='container'>
        <div className='proj-content'>
          <h2>3. Projects</h2>
          <hr className='hr-line' />

          <div className='cards-wrapper'>
          <div className='card'>
            <div className='visual'>
              <img src={img_project1} alt="Project 1" />
            </div>
            <div className='text-content'>
              <h3>Feed Yourself</h3>
              <p> Designed and developed an Android application using Java, utilizing Firebase Realtime Database to provide a real-time search experience allows users to easily find recipes based on available ingredients and dietary needs.</p>
              <a href="https://github.com/hjinlucas/FeedYourself" className="github-icon">
                <AiFillGithub />
              </a>
            </div>
          </div>

          <div className='card'>
            <div className='visual'>
              <img src={img_project2} alt='Project 2' />
            </div>
            <div className='text-content'>
              <h3>React Personal Website</h3>
              <p>Designed and developed a personal website using React.js, HTML, and CSS, showcasing skills and portfolio.</p>
              <a href="https://github.com/hjinlucas/react_personal_website" className="github-icon">
                <AiFillGithub />
              </a>
            </div>
          </div>

          <div className='card'>
            <div className='visual'>
              <img src={img_project3} alt='Project 3' />
            </div>
            <div className='text-content'>
              <h3>Hackathon Project Leader</h3>
              <p>Led a team of developers to create a face recognition-based iOS application for occupancy management of public study areas in a school during a hackathon competition.</p>
              
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proj;
