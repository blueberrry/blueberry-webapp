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

// .card {
//   transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
//   transform-origin: top left;
// }

// .card.card-lift:hover {
//   transform: translateZ(75px);
//   filter: drop-shadow(-5px 31px 21px #000000);
//   cursor: pointer;
// }

const transateZ = `50px`;

const CarouselSlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLOURS.gray};
  border-radius: 1rem;
  height: 100%;
  margin: ${SIZES.carouselSm}rem;
  background-color: ${COLOURS.white};
  ${DROP_SHADOWS.secondary}
  transition: transform .5s ease-in-out, filter 0.5s ease-in-out, border 0.5s ease-in-out;
  transform-origin: center center;
  &.active-slide {
    transition: transform .5s ease-in-out, filter 0.5s ease-in-out, border 0.5s ease-in-out;
    border: 3px solid ${COLOURS.secondary};
    transform: translateZ(${transateZ});
    ${DROP_SHADOWS.secondaryActive};
    &:hover {
      transform: translateZ(85px);
    }
  }
  &:hover {
    transform: translateZ(${transateZ});
    filter: ${DROP_SHADOWS.secondaryActive};
    cursor: pointer;
  }
  > .slide-icons {
    display: flex;
    justify-content: center;
    align-items: baseline;
    > img.icons {
      margin-right 0.4rem;
      &.dog {
        width: 1.3rem;
        transform: translate(-4px, 2px);
      }
      &.five-passengers {
       width: 2.7rem;
       transform: translate(5px, 6px)
      }
      &.standard-luggage {
        width: 2.3rem;
      }
      &.small-luggage {
        width: 2.7rem;
        transform: translate(0px, 5px);
      }
      &.large-luggage {
        transform: translateY(3px);
      }
      &.large-luggage_2 {
        transform: translateX(-5px);
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
      className={index === formValuesContext.currentSlide && `active-slide`}
      onClick={() => formValuesContext.updateCurrentSlide(index)}>
      <Badge
        colour={COLOURS.lighterGray}
        style={{ margin: `${SIZES.spacerXXSm}rem ${SIZES.spacerUltraSm}rem 1.5rem 0` }}>
        <Text type='bodyBold' colour={COLOURS.primary}>
          {slide.title}
        </Text>
      </Badge>
      <div style={{ marginBottom: '1rem', maxWidth: '175px' }}>
        {slide.img && <Image src={slide.img} alt='slide image' />}
        {slide.svg && slide.svg}
      </div>
      {slide.subTitle && (
        <span style={{ textAlign: 'center' }}>
          <Text type='bodyBold' colour={COLOURS.primary}>
            {slide.subTitle}
          </Text>
        </span>
      )}
      <span style={{ textAlign: 'center' }}>
        <Text type='bodySemiBold' colour={COLOURS.primary}>
          {slide.info}
        </Text>
      </span>
      {slide.info2 && (
        <span style={{ textAlign: 'center' }}>
          <Text type='body' colour={COLOURS.primary} className='small'>
            {slide.info2}
          </Text>
        </span>
      )}
      <div className='slide-icons' style={{ marginTop: `0.5rem` }}>
        {slide.icons.map((icon, index) => (
          <img src={icon.icon} alt='' key={`carousel-img-${index}`} className={`icons ${icon.className}`} />
        ))}
      </div>
    </CarouselSlideStyled>
  );
};

export default CarouselCards;
