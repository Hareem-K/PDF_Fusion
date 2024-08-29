import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/'>Home</Link>
            <Link to='/merge'>Merge PDFs</Link>
            <Link to='/split'>Split PDFs</Link>
            <Link to='/annotate'>Annotate PDFs</Link>
          </div>
        </div>
      </div>

      <div className='social-icons'>
            <Link
              className='social-icon-link mail'
              to='mailto:hareemkhan@gmail.com'
              target='_blank'
              aria-label='Email'
            >
              <i class="bi bi-envelope"></i>
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/in/hareemzkhan'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              className='social-icon-link github'
              to='https://github.com/Hareem-K/PDF_Fusion'
              target='_blank'
              aria-label='GitHub'
            >
              <i className="bi bi-github"></i>
            </Link>
        </div>

        <small className='website-rights'>HK © 2024</small>

    </footer>
  );
}

export default Footer;
