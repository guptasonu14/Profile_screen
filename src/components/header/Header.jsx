import React from 'react';
import Logo from "../../assets/logo.png";

import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="separator">|</div>
        
        <div className="text">STORIES</div>
      </div>
      <div className="header-right">
        <button className="course-button">Course</button>
      </div>
    </div>
  );
};

export default Header;
