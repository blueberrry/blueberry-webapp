import React from 'react';
import styled from 'styled-components';
import Image from '../image/Image';
import { BREAKPOINTS, SIZES, STEP_GRID } from '../../constants';

const CardImageStyled = styled.div`
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  ${STEP_GRID.fullWidth}
  @media screen and ${BREAKPOINTS.tablet} {
    ${STEP_GRID.lhs}
  }
`;

const CardImage = ({ src, alt, style }) => {
  return (
    <CardImageStyled>
      <Image src={src} alt={alt} style={style} />
    </CardImageStyled>
  );
};

export default CardImage;
