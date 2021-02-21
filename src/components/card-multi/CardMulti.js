import React from 'react';
import styled from 'styled-components';
import Image from '../image/Image';
import MultiChoice from '../multi-choice/MultiChoice';
import { BREAKPOINTS, SIZES } from '../../constants';

const CardMultiStyled = styled.div`
  border: 1px solid pink;

  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and ${BREAKPOINTS.tablet} {
    > img {
      transform: translateX(-${SIZES.offsetLg}rem);
    }
  }
`;

const CardMulti = (props) => {
  return (
    <CardMultiStyled>
      <MultiChoice {...props} />
    </CardMultiStyled>
  );
};

export default CardMulti;
