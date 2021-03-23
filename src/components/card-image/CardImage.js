import React from 'react';
import styled from 'styled-components';
import Image from '../image/Image';
import { BREAKPOINTS, SIZES, STEP_GRID } from '../../constants';

const CardImageStyled = styled.div`
  // width: 200px;
  // margin: 0 auto;
  width: 100%;
  max-height: 115px;
  padding: 0 ${SIZES.spacerSm}rem;
  ${STEP_GRID.fullWidth}
  > img {
    width: inherit;
    height: inherit;
    max-height: inherit;
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    max-width: 300px;
    max-height: unset;
    ${STEP_GRID.lhs}
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    padding: 0;
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
