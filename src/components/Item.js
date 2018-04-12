import React from "react";
import "./Item.css";

const Item = ({ name, img, coast, date }) => (
  <div>
    <div className="card-container">
      <div className="card-header">
        <div className="card-header-tag">{name}</div>
        <div className="card-header-fav">
          <img src={img} />
        </div>
      </div>
      <div className="card-item-name">{name}</div>
    </div>

    <div className="item-coast">{coast} BTC</div>
    <div className="item-date">{date}</div>
  </div>
);

export default Item;
