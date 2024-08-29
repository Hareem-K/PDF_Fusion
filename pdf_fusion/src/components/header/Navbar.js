import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-brand logo-link">
          PDF Fusion <i className="bi bi-file-earmark-pdf"></i>
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
              >
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/merge" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Merge PDFs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/split" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Split PDFs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/annotate" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Annotate PDFs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
