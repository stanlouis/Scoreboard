import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = ({ title, subtitle }) => {
  return (
    <div className="title-bar">
      <div className="wrapper">
        <h1>{title}</h1>
        <h2 className="title-bar__subtitle">{subtitle}</h2>
      </div>
    </div>
  );
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

TitleBar.defaultProps = {
  subtitle: new Date().getFullYear().toString(),
};
export default TitleBar;
