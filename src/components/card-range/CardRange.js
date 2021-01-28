import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Range from '../range/Range';
import { BREAKPOINTS, SIZES } from '../../constants';

const CardRangeStyled = styled.section`
  @media screen and ${BREAKPOINTS.tablet} {
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
