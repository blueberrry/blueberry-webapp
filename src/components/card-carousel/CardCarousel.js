import React, { useContext, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CarouselContext } from 'pure-react-carousel';
import { useWindowSize } from '../../hooks/windowResize';
import Carousel from '../carousel/Carousel';
import { BREAKPOINTS, SIZES, STEP_GRID, DROP_SHADOWS } from '../../constants';

const desktopStyles = css`
  display: flex;
  width: 100%;
  max-width: 100%;
  justify-content: center;
  > div {
    height: 250px;
    min-width: 225px;
    margin-right: 2rem;
  }
`;

const CardCarouselStyled = styled.div`
  perspective: 1000px;
  width: 100%;
  ${STEP_GRID.fullWidth}
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -37px;
  @media screen and ${BREAKPOINTS.tabletSm} {
    margin-top: unset;
  }
  > div.carousel-provider {
    max-width: 67vw;
    ${(props) => props.isDesktop && desktopStyles}
  }
  .carousel__slider {
    overflow: visible;
  }
`;

const CardCarousel = ({ slides }) => {
  const [width, height] = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(null);
  useEffect(() => {
    width > 640 ? setIsDesktop(true) : setIsDesktop(false);
  }, [width]);
  return (
    <CardCarouselStyled isDesktop={isDesktop}>
      <Carousel slides={slides} isDesktop={isDesktop} />
    </CardCarouselStyled>
  );
};

export default CardCarousel;
