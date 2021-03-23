import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Action from '../actions/Action';

import getJSON from '../../services/utils/get-json';
import { BREAKPOINTS, COLOURS, SIZES } from '../../constants';

const FeedbackDeleteIcon = () => (
  <svg
    width='18'
    height='17'
    viewBox='0 0 18 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ maxWidth: '100%' }}>
    <path d='M16.9298 1L9.06122 8.35111L17.1218 15.4912' stroke='#2C3D55' stroke-width='2.5' />
    <path d='M1.19196 1L9.06057 8.35111L0.999992 15.4912' stroke='#2C3D55' stroke-width='2.5' />
  </svg>
);

const BrokenHeartIcon = () => (
  <svg width='42' height='37' viewBox='0 0 42 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15.4082 31.4561L20.1074 34.8255L22.0034 23.9133L13.9716 16.4857L20.8075 13.122L16.7645 8.71272C15.0036 6.83751 12.3738 5.71008 9.68392 5.81519C4.92244 6.00126 1.32468 9.81727 1.5072 14.4879C1.73102 20.2154 7.16098 24.678 15.3879 31.4394L15.4082 31.4561Z'
      fill='#C50000'
      stroke='#C50000'
    />
    <path
      d='M39.9641 13.7599C41.1721 18.3436 38.6647 21.8554 34.5129 26.2731C31.1149 29.8889 26.9619 32.7238 22.4262 34.7355L26.908 22.9482L21.7616 17.7302L26.5694 14.2833L22.8393 9.17249L26.155 7.18256C31.7856 3.80338 39.0397 7.25857 39.9641 13.7599Z'
      fill='#C50000'
      stroke='#C50000'
    />
  </svg>
);

const SpeachIcon = () => (
  <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12.7177 6.2085L4.2439 6.2085' stroke='#2C3D55' stroke-linecap='round' />
    <path d='M10.4877 9.27783L4.2439 9.27783' stroke='#2C3D55' stroke-linecap='round' />
    <path
      d='M16.7315 1.09277L16.7315 14.3937H9.59566L4.2438 18.4863L4.2438 14.3937H0.675903L0.675903 1.09277L16.7315 1.09277Z'
      stroke='#2C3D55'
      stroke-linejoin='round'
    />
  </svg>
);

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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // padding: 1rem 1rem 0rem 1rem;
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

const StyledFeedbackButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  margin-right: -0.75rem;
  > button {
    margin-right: 0.75rem;
    margin-bottom: 0.4rem;
  }
`;

const StyledFeedbackFooter = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0.75rem 0;
  background-color: ${COLOURS.secondaryMask};
  > div {
    max-width: calc(100% - 1rem);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    > svg {
      // margin-right: 0.25rem;
    }
    > p {
      margin-top: -4px;
    }

    @media screen and ${BREAKPOINTS.mobileMd} {
      > svg {
        margin-right: 0.75rem;
      }
    }
  }
`;

const FeedbackPopover = ({ visibility = false, setVisibility, carId, resultsId, feedbackItems, setFeedbackItems }) => {
  // https://neev.uk/api/sel?selectedCarId=033b03da-8523-44f6-b970-90f2ddadd012&resultID=-MWFX7EP2ste5KiLbTr0&price=true
  // https://neev.uk/api/sel?selectedCarId=033b03da-8523-44f6-b970-90f2ddadd012&resultID=-MWFX7EP2ste5KiLbTr0&price=true&charge=false&range=false&speed=false&colour=false&size=false&make=false&other=false
  const getFeedback = (feedbackName, feedbackValue) => {
    setFeedbackItems({
      ...feedbackItems,
      [feedbackName]: feedbackValue,
    });
    const requestFeedback = `/api/sel?selectedCarId=${carId}&resultID=${resultsId}&${feedbackName}=${feedbackValue}`;
    getJSON(`https://neev.uk${requestFeedback}`).then((response) => {
      let feedbackResponse = {};
      Object.keys(response).forEach((mykey) => {
        feedbackResponse = { ...feedbackResponse, [mykey]: JSON.parse(response[mykey]) };
      });
      setFeedbackItems(feedbackResponse);
    });
  };

  const toggleFeedbackItem = (feedbackItem) => {
    getFeedback(feedbackItem, !feedbackItems[feedbackItem]);
  };

  const FeedbackAction = ({ feedbackItemName }) => {
    return (
      <Action
        feedbackBtn={JSON.parse(feedbackItems[feedbackItemName]) ? 'standard' : 'invert'}
        handleClick={(e) => {
          e.preventDefault();
          return toggleFeedbackItem(feedbackItemName);
        }}>
        <Text
          colour={JSON.parse(feedbackItems[feedbackItemName]) ? COLOURS.white : COLOURS.primary}
          type='body'
          className='small'>
          {feedbackItemName}
        </Text>
      </Action>
    );
  };
  if (visibility)
    return (
      <StyledFeedbackBg className='feed-back'>
        <StyledFeedbackPopover>
          <div className='dismiss'>
            <Action
              iconButton
              handleClick={(e) => {
                e.preventDefault();
                setVisibility(false);
              }}>
              <FeedbackDeleteIcon />
            </Action>
          </div>
          <BrokenHeartIcon />
          <Text colour={COLOURS.primary} type='bodySemiBold'>
            We’re sorry it wasn’t a match
          </Text>
          <Text colour={COLOURS.primary} type='body' className='small'>
            What was wrong with this car?
          </Text>
          <StyledFeedbackButtonsContainer>
            <FeedbackAction feedbackItemName='price' />
            <FeedbackAction feedbackItemName='charge' />
            <FeedbackAction feedbackItemName='range' />
            <FeedbackAction feedbackItemName='speed' />
            <FeedbackAction feedbackItemName='colour' />
            <FeedbackAction feedbackItemName='size' />
            <FeedbackAction feedbackItemName='make' />
            <FeedbackAction feedbackItemName='other' />
          </StyledFeedbackButtonsContainer>
          <StyledFeedbackFooter>
            <div>
              <SpeachIcon />
              <Text className='small' colour={COLOURS.primary}>
                Your feedback helps us improve our service
              </Text>
            </div>
          </StyledFeedbackFooter>
        </StyledFeedbackPopover>
      </StyledFeedbackBg>
    );
  return null;
};

export default FeedbackPopover;
