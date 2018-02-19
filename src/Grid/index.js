import React from 'react';
import './Grid.css';

export const GridColumnGroup = ({ children }) => (
  <div className="grid-column-group">
    {children}
  </div>
);


export const GridColumn = ({ children }) => (
  <div className="grid-column">
    {children}
  </div>
);

export const GridCenter = ({ children }) => (
  <div className="grid-center">
    {children}
  </div>
);

export const GridRow = ({ children }) => (
  <div className="grid-row">
    {children}
  </div>
);
