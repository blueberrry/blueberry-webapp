import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES } from '../../constants';
import { Text } from '../../components';
import { ToolTipIcon } from '../IconLibrary';

const StyledToolTip = styled.div`
  max-width: 400px;
  background-color: ${COLOURS.secondaryMask};
  border-radius: 0.625rem;
  margin ${SIZES.spacerXSm}rem;
  padding: ${SIZES.spacerXXSm}rem;
  display: flex;
  > svg {
    margin: 0.35rem ${SIZES.spacerXXSm}rem 0 0;
    flex: 0 0 auto;
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    margin: 0 auto;
  }
`;

const ToolTip = ({ message }) => {
  return (
    <StyledToolTip>
      <ToolTipIcon />
      <Text type='bodyMedium' className='small' colour={COLOURS.primary}>
        {message}
      </Text>
    </StyledToolTip>
  );
};

export default ToolTip;
