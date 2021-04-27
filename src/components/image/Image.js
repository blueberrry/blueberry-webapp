import React from 'react';
import PropTypes from 'prop-types';

const Image2 = ({ src, alt, maxWidth }) => {
  return <img src={src} alt={alt} style={{ ...maxWidth }} loading='lazy' />;
};

export default Image2;

Image2.defaultProps = {
  maxWidth: { maxWidth: '100%' },
};

Image2.propTypes = {
  maxWidth: PropTypes.object,
};
