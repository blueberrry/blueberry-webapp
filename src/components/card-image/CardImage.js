import React from 'react';
import styled from 'styled-components';
import Image from '../image/Image';
import { BREAKPOINTS, SIZES } from '../../constants';

const CardImageStyled = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and ${BREAKPOINTS.tablet} {
    > img {
      transform: translateX(-${SIZES.offsetLg}rem);
    }
  }
`;

const CardImage = ({ src, alt }) => {
  return (
    <CardImageStyled>
      <Image src={src} alt={alt} />
    </CardImageStyled>
  );
};

export default CardImage;
