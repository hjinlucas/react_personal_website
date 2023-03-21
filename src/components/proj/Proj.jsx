import React from 'react';
import './proj.css';

const Proj = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='proj-content'>
          <h2>3. Projects</h2>
          <hr className='hr-line' />

          <div className='card'>
            <div className='visual'>
              <img src='https://via.placeholder.com/240x240' alt='' />
            </div>
            <div className='text-content'>
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
              <a href='# '>View Project</a>
            </div>
          </div>

          <div className='card'>
            <div className='visual'>
              <img src='https://via.placeholder.com/240x240' alt='' />
            </div>
            <div className='text-content'>
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
              <a href='# '>View Project</a>
            </div>
          </div>

          <div className='card'>
            <div className='visual'>
              <img src='https://via.placeholder.com/240x240' alt='' />
            </div>
            <div className='text-content'>
              <h3>Project Title</h3>
              <p>Description of the project goes here.</p>
              <a href='# '>View Project</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Proj;
