import React, { useEffect, useMemo } from 'react';
import ReactGA from 'react-ga';
import styled, { css } from 'styled-components';
import piggyBank from '../../../assets/images/svgs/piggy-bank.svg';
import { CardImage, CardHeader, CardMain, CardRange, CardSwitch, CardFooter, ToolTip, Text } from '../../../components';
import { CURRENCY_SYMBOL, BREAKPOINTS, COLOURS, SIZES } from '../../../constants';

const ToolTipDesktopContainer = styled.div`
  display: none;
  @media screen and ${BREAKPOINTS.tabletSm} {
    display: block;
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
  }
`;

const ToolTipMobileContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and ${BREAKPOINTS.tabletSm} {
    display: none;
  }
`;

const MessageStyled = styled.div`
  max-width: 380px;
  display: flex;
  text-align: center;
`;

const RESET_ANCHOR = css`
  &:hover {
    cursor: pointer;
  }
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
  &:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }
`;

export const StyledAnchor = styled.a`
  ${RESET_ANCHOR}
`;

const Step2 = ({
  decrementFormStep,
  incrementFormStep,
  skip,
  step,
  budgetType,
  budgetMonthlySteps,
  budgetMonthlyId,
  budgetMonthly,
  budgetFullSteps,
  budgetFullId,
  budgetFull,
  handleChange,
}) => {
  const BudgetRange = () => {
    if (budgetType === 'monthly')
      return (
        <CardRange
          rangeTitle={`Up to £${budgetMonthly} per month`}
          steps={budgetMonthlySteps}
          handleRangeChange={handleChange('budgetMonthlyId')}
          rangeValue={budgetMonthlyId}
          labelSymbol={CURRENCY_SYMBOL}
        />
      );
    if (budgetType === 'inFull')
      return (
        <CardRange
          rangeTitle={`Up to £${budgetFull}`}
          steps={budgetFullSteps}
          handleRangeChange={handleChange('budgetFullId')}
          rangeValue={budgetFullId}
          labelSymbol={CURRENCY_SYMBOL}
        />
      );
  };

  const switchItems = ['monthly', 'inFull'];

  const toolTipMessage =
    'When choosing your budget, keep in mind that running costs such as road tax, fuel and service charges for electric cars are significantly lower on average compared with petrol or diesel cars.';

  const LearnMoreLink = () => {
    return (
      <StyledAnchor href='https://neev.uk/grant.amp.html'>
        <span style={{ fontWeight: 600 }}> Learn more.</span>
      </StyledAnchor>
    );
  };

  const Message = () =>
    budgetType === 'inFull' ? (
      <>
        <Text className='small' colour={COLOURS.primary} type='bodyMedium'>
          Get a government grant of up to £2,500 when you buy in full.
          <LearnMoreLink />
        </Text>
      </>
    ) : (
      ''
    );

  return (
    <>
      <CardHeader headerText='Whats your budget?' />
      <CardImage src={piggyBank} alt='Pig' imgMaxWidth={{ maxWidth: '215px' }}>
        <ToolTipDesktopContainer>
          <ToolTip message={toolTipMessage} />
        </ToolTipDesktopContainer>
      </CardImage>
      <CardMain>
        <CardSwitch
          switchItems={switchItems}
          checkedItem={budgetType}
          handleSwitchChange={handleChange('budgetType')}
        />
        <MessageStyled className='message'>
          <Message />
        </MessageStyled>
        <BudgetRange />
      </CardMain>
      <ToolTipMobileContainer className='tooltip-mobile'>
        <ToolTip message={toolTipMessage} />
      </ToolTipMobileContainer>
      <CardFooter
        decrementFormStep={decrementFormStep}
        incrementFormStep={incrementFormStep}
        skip={() => skip('budgetMonthlyId', 'budgetFullId')}
        step={step}
      />
    </>
  );
};

export default Step2;
