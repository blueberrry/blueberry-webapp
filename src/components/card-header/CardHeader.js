import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import { BREAKPOINTS, COLOURS, OFFSETS, SIZES, STEP_GRID } from '../../constants';

const CardHeaderStyled = styled.section`
  border: 1px solid pink;
  margin: ${SIZES.spacerXSm}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${STEP_GRID.fullWidth}
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
