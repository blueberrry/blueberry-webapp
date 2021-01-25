import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Range from '../range/Range';
import { BREAKPOINTS, COLOURS, OFFSETS, SIZES } from '../../constants';

const CardRangeStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ${BREAKPOINTS.tablet} {
    ${OFFSETS.leftLg}
    > h3 {
      > span.range-header {
        font-size: ${SIZES.fntLg};
      }
    }
  }
`;

const CardRange = ({ rangeTitle, steps, rangeValue, handleRangeChange }) => {
  return (
    <CardRangeStyled>
      <h3>
        <Text type='h3' className='range-header'>
          {rangeTitle}
        </Text>
      </h3>
      <Range steps={steps} handleRangeChange={handleRangeChange} value={rangeValue} />
    </CardRangeStyled>
  );
};

export default CardRange;
