import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// consult on security (styled comps docs)
const Range = ({ steps, value, handleRangeChange }) => {
  const minRange = 2;
  const maxRange = 10;

  const RangeStyled = styled.input``;
  return <RangeStyled type='range' min={minRange} max={maxRange} onChange={handleRangeChange} value={value} step='2' />;
};

export default Range;
