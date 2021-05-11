import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import { BREAKPOINTS, COLOURS, OFFSETS, SIZES, STEP_GRID } from '../../constants';

const CardHeaderStyled = styled.section`
  margin: 0;
  display: flex;
  padding: 0 ${SIZES.spacerXSm}rem;
  // border: 1px solid red;
  ${STEP_GRID.fullWidth}
  margin-bottom: 1.063rem;
  @media screen and ${BREAKPOINTS.tabletSm} {
    margin-top: 1.25remx;
    margin: ${SIZES.spacerXSm}rem;
    text-align: center;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    // align-items: center;
  }
`;

const CardHeader = ({ headerText }) => {
  return (
    <CardHeaderStyled className='card-header-1'>
      <Text type='h2' className='card-header' colour={COLOURS.white}>
        {headerText}
      </Text>
    </CardHeaderStyled>
  );
};

export default CardHeader;
