import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Action from '../actions/Action';

import getJSON from '../../services/utils/get-json';
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
          <BrokenHeart colour='danger' />
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
              <Speach />
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
