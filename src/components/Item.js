import React from 'react';
import './Item.css'
import favorite from '../assets/favorite.svg';

const Item = () => (
  <div>
    <div className="card-container">
      <div className="card-header">
        <div className="card-header-tag">
          Бытовая техника
        </div>
        <div className="card-header-fav">
          <img src={favorite}></img>
        </div>
      </div>
      <div className="card-item-name">Iphone 7 S </div>
    </div>

    <div className="item-coast">
      0,006 BTC
    </div>
    <div className="item-date">
      06.04.2018
    </div>
  </div>
)

export default Item;
