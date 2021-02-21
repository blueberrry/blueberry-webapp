import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CarouselContext } from 'pure-react-carousel';
import Carousel from '../carousel/Carousel';
import { BREAKPOINTS, SIZES, STEP_GRID } from '../../constants';

const CardCarouselStyled = styled.div`
  width: 100%;
  ${STEP_GRID.fullWidth}
  display: flex;
  justify-content: center;
  align-items: center;
  > div.carousel-provider {
    max-width: 67vw;
    @media screen and ${BREAKPOINTS.tablet} {
      margin: 0 ${SIZES.spacerXl}rem;
      border: 3px solid #000;
      max-width: 400px;
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
