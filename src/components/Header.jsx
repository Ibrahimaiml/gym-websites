import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <div className="logo-badge">
            <span className="logo-text">BM</span>
          </div>
          <span className="logo-name">Body Mechanics</span>
        </div>
        <nav className="nav-links">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#calculator" className="nav-link">Calculator</a>
          <a href="#facilities" className="nav-link">Facilities</a>
          <a href="#location" className="nav-link">Location</a>
        </nav>
        <a href="https://wa.me/917810820005?text=Hi%20Body%20Mechanics%2C%20I%20am%20interested%20in%20joining%20the%20gym!" target="_blank" rel="noreferrer" className="btn btn-primary">
          Claim Free Trial
        </a>
      </div>
    </header>
  );
};

export default Header;
