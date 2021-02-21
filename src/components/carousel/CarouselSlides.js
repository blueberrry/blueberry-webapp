import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Slide, Slider, CarouselContext } from 'pure-react-carousel';
import { FormValuesContext } from '../../context/FormValuesContext';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { SIZES } from '../../constants';
import Text from '../text/Text';
import Image from '../image/Image';
import './carousel-slides.css';

const CarouselSlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid blue;
  // min-height: 300px;
  height: 100%;
  margin: ${SIZES.carouselSm}rem;
`;

const Carousel = ({ slides = [] }) => {
  const Slides = ({ slides }) => {
    return slides.map((slide, index) => (
      <Slide
        index={index}
        key={`${slide.slideId}-${index}`}
        classNameHidden='inactive-slide'
        classNameVisible='active-slide'>
        <CarouselSlideStyled key={`${slide.slideId}-${index}`}>
          <Image src={slide.img} alt='slide image' />
          <Text>{slide.title}</Text>
          <div className='slide-icons'>
            {slide.icons.map((icon, index) => (
              <img src={icon} alt='' key={`carousel-img-${index}`} />
            ))}
          </div>
          <Text>{slide.info}</Text>
        </CarouselSlideStyled>
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
