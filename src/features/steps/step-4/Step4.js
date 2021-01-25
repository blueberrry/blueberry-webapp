import React from 'react';
import bolt from '../../../assets/images/bolt.svg';
import { Action, CardImage, CardHeader, CardRange, CardSwitch, CardFooter } from '../../../components';

const Step4 = ({
  decrementFormStep,
  incrementFormStep,
  milesType,
  milesDaily,
  milesDailySteps,
  milesDailyId,
  milesYearly,
  milesYearlySteps,
  milesYearlyId,
  handleChange,
}) => {
  const ChargingTimeRange = () => {
    return (
      <CardRange
        rangeTitle={`Around ${milesDaily} per day`}
        steps={milesDailySteps}
        handleRangeChange={handleChange('milesDailyId')}
        rangeValue={milesDailyId}
      />
    );
  };
  // const switchItems = ['daily', 'yearly'];
  return (
    <>
      <CardHeader headerText='How important is car charging time?' />
      <CardImage src={bolt} alt='Bolt of electricity' />
      {/* <CardSwitch switchItems={switchItems} checkedItem={milesType} handleSwitchChange={handleChange('milesType')} /> */}
      {/* <CardRange /> */}
      <ChargingTimeRange />
      <CardFooter decrementFormStep={decrementFormStep} incrementFormStep={incrementFormStep} />
    </>
  );
};

export default Step4;
