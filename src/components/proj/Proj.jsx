import React from 'react';
import './proj.css';
import img_project1 from '../../assets/img_project1.png';
import img_project2 from '../../assets/img_project2.png';
import img_project3 from '../../assets/img_project3.png';
import { AiFillGithub } from 'react-icons/ai';



const Proj = () => {
  return (
    <section id='projects'>
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
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
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
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
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
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
              
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proj;
