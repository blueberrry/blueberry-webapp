import React from 'react';
import pigImg from '../../../assets/images/pig.svg';
import { CardImage, CardHeader, CardRange, CardSwitch, CardFooter } from '../../../components';

const Step2 = ({
  decrementFormStep,
  incrementFormStep,
  budgetType,
  budgetMonthlySteps,
  budgetMonthlyId,
  budgetMonthly,
  budgetFullSteps,
  budgetFullId,
  budgetFull,
  handleChange,
}) => {
  // const handleBudgetChange = (budgetType) => (e) => {
  //   setBudgetAmount(RANGE_VALUES.budgetSteps[e.target.value]);
  // };

  const BudgetRange = () => {
    if (budgetType === 'monthly')
      return (
        <CardRange
          rangeTitle={`Up to £${budgetMonthly} per month`}
          steps={budgetMonthlySteps}
          handleRangeChange={handleChange('budgetMonthlyId')}
          rangeValue={budgetMonthlyId}
        />
      );
    if (budgetType === 'inFull')
      return (
        <CardRange
          rangeTitle={`Up to £${budgetFull}`}
          steps={budgetFullSteps}
          handleRangeChange={handleChange('budgetFullId')}
          rangeValue={budgetFullId}
        />
      );
  };

  const switchItems = ['monthly', 'inFull'];

  return (
    <>
      <CardHeader headerText='Whats your budget?' />
      <CardImage src={pigImg} alt='Pig' />
      <CardSwitch switchItems={switchItems} checkedItem={budgetType} handleSwitchChange={handleChange('budgetType')} />
      <BudgetRange />
      <CardFooter decrementFormStep={decrementFormStep} incrementFormStep={incrementFormStep} />
    </>
  );
};

export default Step2;
