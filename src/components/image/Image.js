import React from 'react';

const Image = ({ src, alt, style }) => {
  return <img src={src} alt={alt} style={{ maxWidth: '100%', ...style }} />;
};

export default Image;
