import React, { useContext } from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import styled from 'styled-components';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FormValuesContext } from '../../context/FormValuesContext';
import CarouselSlides from './CarouselSlides';

const Carousel = ({ slides = [] }) => {
  const formValuesContext = useContext(FormValuesContext);
  const currentSlide = formValuesContext.currentSlide;

  return (
    <CarouselProvider
      naturalSlideWidth={110}
      naturalSlideHeight={30}
      totalSlides={3}
      isIntrinsicHeight={true}
      visibleSlides={1}
      // infinite={true}
      className='carousel-provider'
      currentSlide={currentSlide ? currentSlide : 1}>
      <CarouselSlides slides={slides} />
    </CarouselProvider>
  );
};

export default Carousel;
