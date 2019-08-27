import React from 'react';
import logo from '../assets/pink-blue-logo.png';

function Footer() {
  return (
    <div className="footer">
      <p className="p">
        “The shortest distance between truth and a human being is a story.” -
        Anthony de Mello
      </p>
      <img
        className="blue-pink-logo"
        alt="logo"
        src={logo}
        width="210"
        height="281"
      />
    </div>
  );
}

export default Footer;
