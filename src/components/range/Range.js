import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { BREAKPOINTS, RANGE, SIZES, COLOURS, DROP_SHADOW } from '../../constants';
import { Text } from '../../components';
const RangeContainer = styled.div`
  width: 240px;
  @media screen and ${BREAKPOINTS.tablet} {
    width: 300px;
  }
  > div.step-labels {
    width: 115%;
    margin-left: -1rem;
  }

  > div.input-range {
    > div.input-range__track {
      height: 0.5rem;
      border-radius: 1rem;
      @media screen and ${BREAKPOINTS.tablet} {
        height: 0.75rem;
      }
      background: ${COLOURS.lightGray};
      > .input-range__track--active {
        height: 0.5rem;
        background: ${COLOURS.primary};
        border-radius: 1rem;
        @media screen and ${BREAKPOINTS.tablet} {
          height: 0.75rem;
        }
      }
      > span.input-range__slider-container {
        ${DROP_SHADOW}
        background: ${COLOURS.primary};
        > div.input-range__slider {
          background: ${COLOURS.primary};
          border: ${COLOURS.primary};
          width: 2rem;
          height: 2rem;
          margin-left: -0.95rem;
          margin-top: -1.15rem;
          @media screen and ${BREAKPOINTS.tablet} {
            margin-top: -1.25rem;
          }
        }
      }
    }
  }

  .input-range__label--value,
  .input-range__label-container {
    display: none;
  }
`;

const StepLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.65rem;
`;

const Range = ({ steps, value, handleRangeChange, labelSymbol }) => {
  const [rangeValue, setRangeValue] = useState(value);

  /*steps: {
    2: 200,
    4: 400,
    6: 600,
    8: 800,
    10: 3000,
  },*/
  //className={value === JSON.parse(step) ? 'step-label--active' : 'step-label--inactive'
  const labels = Object.keys(steps).map((step) => (
    <Text
      colour={COLOURS.primary}
      className={
        value === JSON.parse(step) ? 'step-label--active' : 'step-label--inactive'
      }>{`${labelSymbol}${steps[step]}`}</Text>
  ));
  return (
    <RangeContainer className='range-container'>
      <InputRange
        minValue={RANGE.min}
        maxValue={RANGE.max}
        formatLabel={(value) => `${labelSymbol}${steps[value]}`}
        value={rangeValue}
        onChange={(value) => setTimeout(() => setRangeValue(value), 50)}
        onChangeComplete={() => setTimeout(() => handleRangeChange(rangeValue), 50)}
        step={2}
        draggableTrack={false}
      />
      <StepLabels className='step-labels'>{labels}</StepLabels>
    </RangeContainer>
  );
};

export default Range;

Range.defaultProps = {
  labelSymbol: '',
};

Range.propTypes = {
  labelSymbol: PropTypes.string,
};