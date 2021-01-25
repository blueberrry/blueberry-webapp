import React from 'react';
import carDrivingAway from '../../../assets/images/car-driving-away.svg';
import { Action, CardImage, CardHeader, CardRange, CardSwitch, CardFooter } from '../../../components';

const Step3 = ({
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
  const MilesRange = () => {
    if (milesType === 'daily')
      return (
        <CardRange
          rangeTitle={`Around ${milesDaily} per day`}
          steps={milesDailySteps}
          handleRangeChange={handleChange('milesDailyId')}
          rangeValue={milesDailyId}
        />
      );
    if (milesType === 'yearly')
      return (
        <CardRange
          rangeTitle={`Around ${milesYearly} per year`}
          steps={milesYearlySteps}
          handleRangeChange={handleChange('milesYearlyId')}
          rangeValue={milesYearlyId}
        />
      );
  };
  const switchItems = ['daily', 'yearly'];
  return (
    <>
      <CardHeader headerText='Roughly how many miles will you be driving?' />
      <CardImage src={carDrivingAway} alt='Car driving off into the distance.' />
      <CardSwitch switchItems={switchItems} checkedItem={milesType} handleSwitchChange={handleChange('milesType')} />
      {/* <CardRange /> */}
      <MilesRange />
      <CardFooter decrementFormStep={decrementFormStep} incrementFormStep={incrementFormStep} />
    </>
  );
};

export default Step3;
