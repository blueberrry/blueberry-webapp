import React from 'react';
import carBattery from '../../../assets/images/svgs/car-battery.svg';
import { CardImage, CardHeader, CardMain, CardFooter, CardMulti } from '../../../components';
import { AppCharging, Home, RoadSide } from '../../../components/IconLibrary';

const Step4 = ({ decrementFormStep, incrementFormStep, postData, skip, step, activeId, handleChange }) => {
  const choiceSelections = [
    { icon: <Home />, title: 'Home', info: 'Using your own charger \n (We assume this is A.C. type)', id: 1 },
    {
      icon: <RoadSide />,
      title: 'Local public charging point',
      info: 'Using a charging point close to your home',
      id: 2,
    },
    {
      icon: <AppCharging />,
      title: 'Charging points during trips',
      info: 'Using a range of public charging points on the go',
      id: 3,
    },
  ];

  // imgMaxWidth should just be '317px' OR primary/secondary
  return (
    <>
      <CardHeader headerText='Where will you usually re-charge your car?' />
      <CardImage src={carBattery} alt='Bolt of electricity' imgMaxWidth={{ maxWidth: '317px' }} />
      <CardMain noMargin>
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
