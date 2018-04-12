import React from 'react';
import './Header.css';
import menu from '../assets/menu.svg';
import logo from '../assets/logo.svg';

const Header = (props) => (
  <div className="container">
    <img src={menu}></img>
    <img src={logo}></img>
    <img src={menu}></img>
  </div>
);

export default Header;
