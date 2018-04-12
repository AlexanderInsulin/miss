import React from 'react';
import './Header.css';
import menu from '../assets/menu.svg';
import logo from '../assets/logo.svg';
import dropdown from '../assets/dropdown.svg';

const Header = (props) => (
  <div className="container">
    <img src={menu} className="menu"></img>
    <img src={logo}></img>
    <div>
      <img src={menu} className="avatar"></img>
      <img src={dropdown} className="dropdown"></img>
    </div>
  </div>
);

export default Header;
