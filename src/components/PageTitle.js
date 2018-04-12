import React from 'react';
import './PageTitle.css';

const PageTitle = ({text, count}) => (
  <div className="page-title-container">
    <div className="text">
      {text}
    </div>
    <div className="count">
      {count}
    </div>
  </div>
)

export default PageTitle;
