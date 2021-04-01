import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Slide, Slider, CarouselContext } from 'pure-react-carousel';
import { FormValuesContext } from '../../context/FormValuesContext';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { SIZES, COLOURS, DROP_SHADOWS } from '../../constants';
import Text from '../text/Text';
import Image from '../image/Image';
import { Badge } from '../list-item/ListItem';
import './carousel-slides.css';

const CarouselSlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLOURS.gray};
  border-radius: 1rem;
  // min-height: 300px;
  height: 100%;
  margin: ${SIZES.carouselSm}rem;
  ${DROP_SHADOWS.secondary}
  transition: transform .2s ease-in;
  &.mobile-active-slide{
    border: 2px solid ${COLOURS.secondary} !important;
  }
  &.desktop-active-slide {
    border: 2px solid ${COLOURS.secondary};
    transform: scale(1.12);
    &:hover {
      transform: scale(1.12);
    }
  }
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  > .slide-icons {
    display: flex;
    justify-content: center;
    align-items: baseline;
    > img.icons {
      margin-right 0.4rem;
      &.dog {
        width: 1.2rem;
      }
      &.five-passengers {
       width: 2.3rem;
      }
      &.standard-luggage {
        width: 2rem;
      }
      &.small-luggage {
        width: 2rem;
      }
    }
  }
`;

const CarouselCards = ({ slide, index, isDesktop }) => {
  const formValuesContext = useContext(FormValuesContext);
  return (
    <CarouselSlideStyled
      isDesktop={isDesktop}
      key={`${slide.slideId}-${index}`}
      className={
        isDesktop && index === formValuesContext.currentSlide
          ? `desktop-active-slide`
          : !isDesktop && index === formValuesContext.currentSlide
          ? `mobile-active-slide`
          : ``
      }
      onClick={isDesktop ? () => formValuesContext.updateCurrentSlide(index) : () => {}}>
      <Image src={slide.img} alt='slide image' />
      <Badge colour={COLOURS.lighterGray} style={{ margin: `${SIZES.spacerXXSm}rem ${SIZES.spacerUltraSm}rem 0 0` }}>
        <Text type='bodyBold' colour={COLOURS.primary}>
          {slide.title}
        </Text>
      </Badge>
      <div className='slide-icons' style={{ margin: `${SIZES.spacerUltraSm}rem 0` }}>
        {slide.icons.map((icon, index) => (
          <img src={icon.icon} alt='' key={`carousel-img-${index}`} className={`icons ${icon.className}`} />
        ))}
      </div>
      <Text colour={COLOURS.primary}>{slide.info}</Text>
    </CarouselSlideStyled>
  );
};

export default CarouselCards;
