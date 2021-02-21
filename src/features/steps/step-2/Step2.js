import React from 'react';
import pigImg from '../../../assets/images/pig.svg';
import { CardImage, CardHeader, CardMain, CardRange, CardSwitch, CardFooter } from '../../../components';
import { CURRENCY_SYMBOL } from '../../../constants';

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

  return (
    <>
      <CardHeader headerText='Whats your budget?' />
      <CardImage src={pigImg} alt='Pig' />
      <CardMain>
        <CardSwitch
          switchItems={switchItems}
          checkedItem={budgetType}
          handleSwitchChange={handleChange('budgetType')}
        />
        <BudgetRange />
      </CardMain>
      <CardFooter decrementFormStep={decrementFormStep} incrementFormStep={incrementFormStep} skip={skip} step={step} />
    </>
  );
};

export default Step2;
