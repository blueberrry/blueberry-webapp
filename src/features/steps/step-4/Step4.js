import React from 'react';
import chargingPoint from '../../../assets/images/charging-point.svg';
import {
  Action,
  CardImage,
  CardHeader,
  CardRange,
  CardSwitch,
  CardMain,
  CardFooter,
  CardMulti,
} from '../../../components';

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
      <CardHeader headerText='Where will you usually re-charge your car?' />
      <CardImage src={chargingPoint} alt='Bolt of electricity' style={{ maxWidth: '300px !important' }} />
      {/* <CardSwitch switchItems={switchItems} checkedItem={milesType} handleSwitchChange={handleChange('milesType')} /> */}
      {/* <CardRange /> */}
      {/* <ChargingTimeRange /> */}
      <CardMain>
        <CardMulti />
      </CardMain>
      <CardFooter decrementFormStep={decrementFormStep} incrementFormStep={incrementFormStep} />
    </>
  );
};

export default Step4;
