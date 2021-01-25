import React, { useContext, useEffect, useState } from 'react';
import { CarouselProvider, Slide, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CarouselContext } from 'pure-react-carousel';
import { FormValuesContext } from '../../context/FormValuesContext';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Text from '../text/Text';
import Image from '../image/Image';

const Carousel = ({ slides = [] }) => {
  const Slides = ({ slides }) => {
    return slides.map((slide, index) => (
      <Slide
        index={index}
        key={`${slide.slideId}-${index}`}
        classNameHidden='hidden-slide'
        classNameVisible='visible-slide'>
        <Image src={slide.img} alt='slide image' />
        <Text>{slide.title}</Text>
        <Text>{slide.info}</Text>
      </Slide>
    ));
  };

  const carouselContext = useContext(CarouselContext);
  const formValuesContext = useContext(FormValuesContext);
  const currentSlide = carouselContext.state.currentSlide + 1;
  formValuesContext.updateCarType(slides.find((type) => type.slideId === currentSlide).id);
  formValuesContext.updateCurrentSlide(carouselContext.state.currentSlide);

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

export default Carousel;
