import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <p>
          Developed by{' '}
          <a
            href="https://github.com/hjinlucas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hao Jin (Lucas)
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
