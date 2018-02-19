import React from 'react';
import './Image.css';

const Image = ({ src, height, width, marginLeft = 0 }) => {
  const style = {
    marginLeft,
    height,
    width,
    backgroundImage: `url(${src})`
  };
  return (<div className="image" style={style} />);
};

export default Image;
