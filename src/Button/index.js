import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const buildClassListString = (options = {}) => {
  const classList = [];
  for (const className in options) {
    const shouldIncludeClass = options[className];
    if (shouldIncludeClass) {
      classList.push(className);
    }
  }
  return classList.join(' ');
};

const Button = ({ selected, onClick, children, fadeIn }) => {
  const className = buildClassListString({
    'button': true,
    'button-large': true,
    'button-fade-in': fadeIn,
    'button-selected': selected
  });
  return (<button
    onClick={onClick}
    className={className}>
    {children}
  </button>);
};

Button.defaultProps = {
  fadeIn: false,
  selected: false,
  onClick: () => {}
};
Button.propTypes = {
  fadeIn: PropTypes.bool,
  selected: PropTypes.bool
};

export default Button;
