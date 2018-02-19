import React from 'react';
import PropTypes from 'prop-types';
import './Shaker.css';

const ShakeEffect = ({ children, duration }) => {
  const inlineStyle = {
    animationDuration: duration
  };

  return (
    <div className="shake-effect" style={inlineStyle}>
      {children}
    </div>
  );
};

ShakeEffect.defaultProps = {
  duration: '3s'
};

ShakeEffect.propTypes = {
  duration: PropTypes.string
};

export default ShakeEffect;
