import React from 'react';

const TitleBar = ({ title }) => {
  return (
    <div className="title-bar">
      <div className="wrapper">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default TitleBar;
