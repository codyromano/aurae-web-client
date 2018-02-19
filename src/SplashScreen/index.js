import React from 'react';
import PropTypes from 'prop-types';
import './SplashScreen.css';

const SplashScreen = ({ children, className, backgroundColor }) => {
  const classList = ['full-screen', 'splash-screen', className].join(' ');
  const customStyles = {};

  if (backgroundColor) {
    Object.assign(customStyles, { backgroundColor });
  }

  return (
    <div className={classList} style={customStyles}>
      {children}
    </div>
  );
};

SplashScreen.propTypes = {
  backgroundColor: PropTypes.string
};

export default SplashScreen;
