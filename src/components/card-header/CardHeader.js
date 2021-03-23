import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import { BREAKPOINTS, COLOURS, OFFSETS, SIZES, STEP_GRID } from '../../constants';

const CardHeaderStyled = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${SIZES.spacerXSm}rem;
  ${STEP_GRID.fullWidth}
  @media screen and ${BREAKPOINTS.tabletSm} {
    padding: ${SIZES.spacerXSm}rem;
  }
`;

const CardHeader = ({ headerText }) => {
  return (
    <CardHeaderStyled>
      <Text type='h2' className='card-header' colour={COLOURS.primary}>
        {headerText}
      </Text>
    </CardHeaderStyled>
  );
};

export default CardHeader;
