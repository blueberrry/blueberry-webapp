import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Action from '../actions/Action';
import { BREAKPOINTS, COLOURS, OFFSETS, SIZES } from '../../constants';

const CardFooterStyled = styled.section`
  border: 1px solid pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: ${SIZES.spacerXXSm}rem;
  @media screen and ${BREAKPOINTS.tablet} {
    grid-column: 1 / span 2;
    margin: ${SIZES.spacerSm}rem;
  }
  > div.skip-container {
    flex: 1 0 100%;
    display: flex;
    justify-content: center;
    margin-bottom: ${SIZES.spacerXSm}rem;
  }
  > div.main-footer-actions {
    flex: 1 0 100%;
    display: flex;
    justify-content: center;
    margin-left: -${SIZES.spacerXXSm}rem;
    > button:first-of-type {
      border: 1px solid pink;
    }
    > button:last-of-type {
      border: 1px solid pink;
      margin-left: ${SIZES.spacerXXSm}rem;
    }
  }
`;

const CardFooter = ({ decrementFormStep, incrementFormStep, postData, skip, step }) => {
  return (
    <CardFooterStyled>
      <div className='skip-container'>
        <Action link handleClick={step !== 4 ? skip : postData}>
          <Text type='bodySemiBold' colour={COLOURS.primary} style={{ textDecoration: 'underline' }}>
            Skip this Question
          </Text>
        </Action>
      </div>
      <div className='main-footer-actions'>
        {decrementFormStep && (
          <Action modest handleClick={decrementFormStep}>
            <Text type='bodySemiBold' colour={COLOURS.dark}>
              &lt; Back
            </Text>
          </Action>
        )}
        <br />
        <Action secondary handleClick={step !== 4 ? incrementFormStep : postData}>
          <Text type='bodySemiBold' colour={COLOURS.white}>
            {step !== 4 ? 'Next' : 'Find cars'}
          </Text>
        </Action>
      </div>
    </CardFooterStyled>
  );
};

export default CardFooter;
