import React from 'react';
import './Header.css';
import menu from '../assets/menu.svg';

const Header = (props) => (
  <div className="container">
    <img src={menu}></img>
  </div>
);

export default Header;
