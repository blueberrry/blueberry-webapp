import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES, CARD_MAX_WIDTH } from '../../constants';
import { Text } from '../../components';
import { ToolTip } from '../IconLibrary';

const StyledToolTip = styled.div`
  max-width: ${CARD_MAX_WIDTH};
  background-color: ${COLOURS.otherMask};
  border-radius: 0.625rem;
  margin: 0 ${SIZES.spacerXSm}rem;
  padding: ${SIZES.spacerXXSm}rem;
  display: flex;
  color: ${COLOURS.white};
  > svg {
    margin: 0.35rem ${SIZES.spacerXXSm}rem 0 0;
    flex: 0 0 auto;
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    margin: 0 auto;
  }
`;

const ToolTipContainer = ({ message }) => {
  return (
    <StyledToolTip>
      <ToolTip />
      <Text type='bodyMedium' className='small' colour={COLOURS.white}>
        {message}
      </Text>
    </StyledToolTip>
  );
};

export default ToolTipContainer;
