import React from 'react';
import styled from 'styled-components';
import { COLOURS } from '../../constants';
import { Text } from '../../components';
import { ToolTipIcon } from '../IconLibrary';

const StyledToolTip = styled.div`
  max-width: 100%;
  background-color: ${COLOURS.secondaryMask};
  border-radius: 0.625rem;
`;

const ToolTip = ({ message }) => {
  return (
    <StyledToolTip>
      <ToolTipIcon />
      <Text>{message}</Text>
    </StyledToolTip>
  );
};

export default ToolTip;
