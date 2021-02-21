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

const Step4 = ({ decrementFormStep, incrementFormStep, postData, skip, step, activeId, handleChange }) => {
  // const ChargingTimeRange = () => {
  //   return (
  //     <CardRange
  //       rangeTitle={`Around ${milesDaily} per day`}
  //       steps={milesDailySteps}
  //       handleRangeChange={handleChange('milesDailyId')}
  //       rangeValue={milesDailyId}
  //     />
  //   );
  // };
  // const switchItems = ['daily', 'yearly'];

  const choiceSelections = [
    { icon: chargingPoint, title: 'Home', info: 'Using your own charger \n (We assume this is A.C. type)', id: 1 },
    {
      icon: chargingPoint,
      title: 'Local public charging point',
      info: 'Using a charging point close to your home',
      id: 2,
    },
    {
      icon: chargingPoint,
      title: 'Charging points during trips',
      info: 'Using a range of public charging points on the go',
      id: 3,
    },
  ];
  return (
    <>
      <CardHeader headerText='Where will you usually re-charge your car?' />
      <CardImage src={chargingPoint} alt='Bolt of electricity' style={{ maxWidth: '300px !important' }} />
      <CardMain>
        <CardMulti choiceSelections={choiceSelections} activeId={activeId} handleMultiChange={handleChange} />
      </CardMain>
      <CardFooter
        decrementFormStep={decrementFormStep}
        incrementFormStep={incrementFormStep}
        postData={postData}
        skip={skip}
        step={step}
      />
    </>
  );
};

export default Step4;
