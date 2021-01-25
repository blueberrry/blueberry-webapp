import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CarouselContext } from 'pure-react-carousel';
import Carousel from '../carousel/Carousel';
import { BREAKPOINTS, SIZES, STEP_GRID } from '../../constants';

const CardCarouselStyled = styled.div`
  width: 100%;
  ${STEP_GRID.full}
  @media screen and ${BREAKPOINTS.tablet} {
    > div.carousel {
      margin: 0 ${SIZES.spacerXl}rem;
      border: 3px solid #000;
    }
  }
  .carousel__slider {
    overflow: visible;
  }
`;

const CardCarousel = ({ slides }) => {
  return (
    <CardCarouselStyled>
      <Carousel slides={slides} />
    </CardCarouselStyled>
  );
};

export default CardCarousel;
