import React from 'react';
import PropTypes from 'prop-types';
import './ToolTip.css';

const ToolTip = ({ children, popoverText }) => (
  <div className="tool-tip-wrapper">
    {children}
    <div className="tool-tip-content">
      {popoverText}
    </div>
  </div>
);

ToolTip.propTypes = {
  popoverText: PropTypes.string.isRequired
};

export default ToolTip;
