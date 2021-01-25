import React from 'react';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />;
};

export default Image;
