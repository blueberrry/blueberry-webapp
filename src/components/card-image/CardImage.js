import React from 'react';
import styled from 'styled-components';
import Image from '../image/Image';
import { BREAKPOINTS, SIZES, STEP_GRID } from '../../constants';

const CardImageStyled = styled.div`
  // width: 200px;
  // margin: 0 auto;
  display: none;
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
    display: flex;
    flex-direction: column;
    max-height: unset;
    ${STEP_GRID.lhs}
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    padding: 0;
    > img {
      max-width: 217px !important;
    }
  }
`;

const CardImage = ({ src, alt, style, children }) => {
  return (
    <CardImageStyled>
      <Image src={src} alt={alt} style={style} />
      {children}
    </CardImageStyled>
  );
};

export default CardImage;
