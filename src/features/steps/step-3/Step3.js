import React from 'react';
import carDrivingAway from '../../../assets/images/car-driving-away.svg';
import { CardImage, CardHeader, CardMain, CardRange, CardSwitch, CardFooter } from '../../../components';

const Step3 = ({
  decrementFormStep,
  incrementFormStep,
  skip,
  step,
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
      <CardHeader headerText='Roughly how many miles do you drive?' />
      <CardImage src={carDrivingAway} alt='Car driving off into the distance.' />
      <CardMain>
        <CardSwitch switchItems={switchItems} checkedItem={milesType} handleSwitchChange={handleChange('milesType')} />
        <MilesRange />
      </CardMain>
      <CardFooter decrementFormStep={decrementFormStep} incrementFormStep={incrementFormStep} skip={skip} step={step} />
    </>
  );
};

export default Step3;