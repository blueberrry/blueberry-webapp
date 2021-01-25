import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Action from '../actions/Action';
import { BREAKPOINTS, COLOURS, OFFSETS, SIZES } from '../../constants';

const CardFooterStyled = styled.section`
  border: 1px solid pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${SIZES.spacerSm}rem;
  @media screen and ${BREAKPOINTS.tablet} {
    grid-column: 1 / span 2;
  }
`;

const CardFooter = ({ decrementFormStep, incrementFormStep }) => {
  return (
    <CardFooterStyled>
      {decrementFormStep && (
        <Action modest handleClick={decrementFormStep}>
          <Text type='bodyLgSemiBold' colour={COLOURS.dark}>
            Back
          </Text>
        </Action>
      )}
      <br />
      <Action secondary handleClick={incrementFormStep}>
        <Text type='bodyLgSemiBold' colour={COLOURS.white}>
          Next
        </Text>
      </Action>
    </CardFooterStyled>
  );
};

export default CardFooter;
