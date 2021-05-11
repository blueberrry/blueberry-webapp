import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from '../constants';

const StyledScrollLock = styled.div`
  all: inherit;
  @media screen and ${BREAKPOINTS.tabletSm} {
    width: 200%;
  }
`;

let firstClientX, clientX;

const preventTouch = (e) => {
  const minValue = 5; // threshold

  clientX = e.touches[0].clientX - firstClientX;

  // Vertical scrolling does not work when you start swiping horizontally.
  if (Math.abs(clientX) > minValue) {
    e.preventDefault();
    e.returnValue = false;

    return false;
  }
};

const touchStart = (e) => {
  firstClientX = e.touches[0].clientX;
};

const ScrollLock = ({ children }) => {
  let containerRef = React.createRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('touchstart', touchStart);
      containerRef.current.addEventListener('touchmove', preventTouch, {
        passive: false,
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('touchstart', touchStart);
        containerRef.current.removeEventListener('touchmove', preventTouch, {
          passive: false,
        });
      }
    };
  });

  return <StyledScrollLock ref={containerRef}>{children}</StyledScrollLock>;
};

export default ScrollLock;
