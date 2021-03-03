import React, { useContext } from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import styled from 'styled-components';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FormValuesContext } from '../../context/FormValuesContext';
import CarouselSlides from './CarouselSlides';
import CarouselCards from './CarouselCards';

const Carousel = ({ slides = [], isDesktop }) => {
  const formValuesContext = useContext(FormValuesContext);
  const currentSlide = formValuesContext.currentSlide;

  if (isDesktop) {
    return (
      <div className='carousel-provider'>
        {slides.map((slide, index) => (
          <CarouselCards slide={slide} index={index} isDesktop={true} />
        ))}
      </div>
    );
  }
  return (
    <CarouselProvider
      totalSlides={3}
      isIntrinsicHeight={true}
      visibleSlides={1}
      lockOnWindowScroll={true}
      className='carousel-provider'
      currentSlide={currentSlide}>
      <CarouselSlides slides={slides} />
    </CarouselProvider>
  );
};

export default Carousel;
