import React from 'react';
import './Header.css'

function Header() {

  const openResume = () => {
    window.open('/resume', "_blank");
  };

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
      <div className="header-item" onClick={openResume}>
        <div className="resume-button">
        Resume
        </div>
      </div>
    </div>
  );
}

export default Header;
