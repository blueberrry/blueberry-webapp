import React, { Children } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Text from '../text/Text';
import Range from '../range/Range';
import { BREAKPOINTS, COLOURS, SIZES } from '../../constants';

const CardRangeStyled = styled.section`
  margin-top: 29px;
  width: 100%;
  display: flex;
  justify-content: center;
  > h3 {
    margin-top: ${SIZES.spacerMd}rem;
  }
`;

const CardRange = ({ rangeTitle, steps, rangeValue, handleRangeChange, labelSymbol, children }) => {
  return (
    <CardRangeStyled className='card-range'>
      {children}
      <Range steps={steps} handleRangeChange={handleRangeChange} value={rangeValue} labelSymbol={labelSymbol} />
      {/* <Text type='h3' className='range-header' style={{ textAlign: 'center' }} colour={COLOURS.primary}>
        {rangeTitle}
      </Text> */}
    </CardRangeStyled>
  );
};

export default CardRange;
