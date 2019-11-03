import React from 'react';

import LogoIcon from '../LogoIcon/LogoIcon';
import './Toolbar.css';

const Toolbar = props => (
  <nav className="toolbar">
    <a className="logo_title" href="/">
      <LogoIcon />
      <p>My LifeHab</p>
    </a>
    
    <ul className="links">
      <a href="/" className="active">Dashboard</a
      ><a href="/">Live Feed</a>
    </ul>
  </nav>
);

export default Toolbar;
