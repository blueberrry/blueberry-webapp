import React, { useContext, useEffect, useState } from 'react';
import { CarouselProvider, Slide, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CarouselContext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FormValuesContext } from '../../context/FormValuesContext';
import CarouselSlides from './CarouselSlides';
import Text from '../text/Text';
import Image from '../image/Image';

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
      currentSlide={currentSlide ? currentSlide : 1}>
      <CarouselSlides slides={slides} />
    </CarouselProvider>
  );
};

export default Carousel;
