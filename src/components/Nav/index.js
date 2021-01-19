import React from 'react';

function Nav (props) {

  return (
    <nav>
      <ul className = "flex-row">
        <li className = "mx-2">
          <a href = "/about">About Me</a>
        </li>
        <li className = "mx-2">
          <a href = "/portfolio" className = "nav">Portfolio</a>
        </li>
        <li className = "mx-2">
          <a href = "/contact" className = "nav">Contact</a>
        </li>
        <li className = "mx-2">
          <a href = "/resume" className = "nav">Resume</a>
        </li>
      </ul>
    </nav>
  
  );
}

export default Nav;