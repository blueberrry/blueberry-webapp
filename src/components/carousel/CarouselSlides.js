import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Slide, Slider, CarouselContext } from 'pure-react-carousel';
import { FormValuesContext } from '../../context/FormValuesContext';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { SIZES } from '../../constants';
import Text from '../text/Text';
import Image from '../image/Image';
import CarouselCards from './CarouselCards';
import './carousel-slides.css';

const CarouselSlides = ({ slides = [] }) => {
  const Slides = ({ slides }) => {
    return slides.map((slide, index) => (
      <Slide
        index={index}
        key={`${slide.slideId}-${index}`}
        classNameHidden='inactive-slide'
        classNameVisible='active-slide'
        onFocus={(e) => console.log('focused')}
        onBlur={(e) => console.log('blurred')}>
        <CarouselCards slide={slide} index={index} isDesktop={false} />
      </Slide>
    ));
  };

  const carouselContext = useContext(CarouselContext);
  const formValuesContext = useContext(FormValuesContext);
  const currentSlide = carouselContext.state.currentSlide + 1;
  formValuesContext.updateCarType(slides.find((type) => type.slideId === currentSlide).id);
  formValuesContext.updateCurrentSlide(carouselContext.state.currentSlide);

  useEffect(() => {
    if (formValuesContext.currentSlide === null) {
      formValuesContext.updateCurrentSlide(1);
    }
  }, [formValuesContext]);

  useEffect(() => {
    function onChange() {
      const currentSlide = carouselContext.state.currentSlide + 1;
      formValuesContext.updateCarType(slides.find((type) => type.slideId === currentSlide).id);
      formValuesContext.updateCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext, formValuesContext, slides]);

  return (
    <Slider>
      <Slides slides={slides} />
    </Slider>
  );
};

export default CarouselSlides;
