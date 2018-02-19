import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css';

const Heading = ({ children, size, theme }) => {
  const mapThemeToStyles = {
    'light': {
      color: '#fff'
    }
  };
  const customStyles = mapThemeToStyles[theme] || {};

  return (
    <div
      className={`heading heading-${size}`}
      style={customStyles}
    >
    <strong>{children}</strong>
  </div>);
};

Heading.defaultProps = {
  size: 'extra-large'
};

Heading.propTypes = {
  theme: PropTypes.oneOf([
    "light"
  ]),
  size: PropTypes.oneOf([
    'extra-small',
    'small',
    'normal',
    'large',
    'extra-large'
  ])
};

export default Heading;
