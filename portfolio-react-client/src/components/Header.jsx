import React from 'react';
import './Header.css'
import About from './About'

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="header-item" onClick={() => scrollToSection('about')}>
        About
      </div>
      <div className="header-item" onClick={() => scrollToSection('projects')}>
        Projects
      </div>
      <div className="header-item" onClick={() => scrollToSection('contact')}>
        Contact
      </div>
      <div className="header-item" onClick={() => scrollToSection('resume')}>
        Resume
      </div>
    </div>
  );
}

export default Header;
