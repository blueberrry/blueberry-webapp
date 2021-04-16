// refactor FeedbackPopover to use this

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Action from '../actions/Action';

import { BREAKPOINTS, COLOURS, SIZES } from '../../constants';
import { BrokenHeart, FeedbackDelete, Speach } from '../../components/IconLibrary';

const StyledFeedbackBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOURS.primaryMask};
  z-index: 30;
`;

const StyledFeedbackPopover = styled.div`
  width: calc(100% - 3rem);
  min-height: 50%;
  margin-left: 0.75rem;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLOURS.white};
  border-radius: ${SIZES.crdBrRd}rem;
  > div.dismiss {
    align-self: flex-start;
    margin-left: 0.7rem;
    margin-top: 0.25rem;
    > button {
      > svg {
        width: 12px;
      }
    }
  }
`;

const Popover = ({ visibility = false, setVisibility, children }) => {
  // https://neev.uk/api/sel?selectedCarId=033b03da-8523-44f6-b970-90f2ddadd012&resultID=-MWFX7EP2ste5KiLbTr0&price=true
  // https://neev.uk/api/sel?selectedCarId=033b03da-8523-44f6-b970-90f2ddadd012&resultID=-MWFX7EP2ste5KiLbTr0&price=true&charge=false&range=false&speed=false&colour=false&size=false&make=false&other=false

  if (visibility)
    return (
      <StyledFeedbackBg
        className='feed-back'
        onClick={(e) => {
          e.preventDefault();
          setVisibility(false);
        }}>
        <StyledFeedbackPopover onClick={(e) => e.stopPropagation()}>
          <div className='dismiss'>
            <Action
              iconButton
              handleClick={(e) => {
                e.preventDefault();
                setVisibility(false);
              }}>
              <FeedbackDelete />
            </Action>
          </div>
          {children}
        </StyledFeedbackPopover>
      </StyledFeedbackBg>
    );
  return null;
};

export default Popover;
