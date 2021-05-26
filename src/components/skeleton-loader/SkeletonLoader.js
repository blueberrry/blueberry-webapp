import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLOURS } from '../../constants';

const gray1 = COLOURS.lightGray;
const gray2 = COLOURS.graySecondary;

const shimmerSize = `300px`;

const shimmerAnimation = (props) => {
  return keyframes`
    0% {background-position: -${shimmerSize} 0}
    100% {background-position: calc(${shimmerSize} + 500px) 0}
  `;
};

const StyledShimmer = styled.div`
  height: 100%;
  width: 100%;
  animation: ${shimmerAnimation} ${(props) => props.shimmerTime}s linear infinite;
  max-width: 1000px;

  background-color: ${gray1};
  background-image: linear-gradient(-90deg, ${gray1} 0%, ${gray2} 50%, ${gray1} 100%);
  background-size: ${shimmerSize} 100%;
  background-repeat: no-repeat;
  background-position: -${shimmerSize} 0;
`;

const SkeletonLoader = ({ speed = 'fast', light = false, dark = true }) => {
  const speedDetails = {
    slow: 2,
    medium: 1.5,
    fast: 1.25,
  };

  // tbc
  const themeDetails = {
    light: COLOURS.white,
    dark: COLOURS.primary,
  };

  return <StyledShimmer shimmerTime={speedDetails[speed]} />;
};

export default SkeletonLoader;
