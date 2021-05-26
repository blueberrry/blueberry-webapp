import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useImgLoaded } from '../../hooks';
import SkeletonLoader from '../skeleton-loader/SkeletonLoader';
import { VISUALLY_HIDDEN } from '../../constants/';

// todo - figure out why this isn't working as expected (doesn't seem to be visually hiding anything whilst the image is loading,
//      - it does seem to be working with stuff like border: 1px solid red

const Image2 = ({ src, alt, maxWidth }) => {
  const StyledImg = styled.img`
    ${(props) => props.isHidden && VISUALLY_HIDDEN}
  `;

  const [ref, imgLoaded, onImgLoad] = useImgLoaded();

  return (
    <>
      {!imgLoaded && <SkeletonLoader />}
      <div
        style={imgLoaded ? { height: 'inherit', overflow: 'hidden', visibility: 'visible' } : { visibility: 'hidden' }}
        className='img'>
        <StyledImg
          ref={ref}
          src={src}
          alt={alt}
          style={{ ...maxWidth }}
          loading='lazy'
          onLoad={onImgLoad}
          // isHidden={!imgLoaded}
        />
      </div>
      {/* <StyledImageContainer isHiddenl={!imgLoaded}> */}
      {/* <SkeletonLoader /> */}
      {/* <SkeletonLoader /> */}
      {/* </StyledImageContainer> */}
    </>
  );
};

export default Image2;

Image2.defaultProps = {
  maxWidth: { maxWidth: '100%' },
};

Image2.propTypes = {
  maxWidth: PropTypes.object,
};
