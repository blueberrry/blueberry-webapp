import React from 'react';
// import pigImg from '../../../assets/images/pig.svg';
import { CardHeader, CardCarousel, CardFooter } from '../../../components';
import personalCar from '../../../assets/images/svgs/personal-car.svg';
import standardCar from '../../../assets/images/svgs/standard-car.svg';
import largeCar from '../../../assets/images/svgs/large-car.svg';
import familyDog from '../../../assets/images/svgs/dog.svg';
import fivePassengers from '../../../assets/images/svgs/5-passengers.svg';
import standardLuggage from '../../../assets/images/svgs/standard-luggage.svg';
import smallLuggage from '../../../assets/images/svgs/small-luggage.svg';
import largeLuggage from '../../../assets/images/svgs/large-luggage.svg';

const Step1 = ({ decrementFormStep, incrementFormStep, skip, step }) => {
  const carTypes = [
    {
      id: 123,
      slideId: 1,
      img: largeCar,
      icons: [fivePassengers, largeLuggage, familyDog],
      title: 'Large',
      info: '5+ passengers',
    },
    {
      id: 345,
      slideId: 2,
      img: standardCar,
      icons: [fivePassengers, standardLuggage, familyDog],
      title: 'Standard',
      info: '5 passengers',
    },
    {
      id: 456,
      slideId: 3,
      img: personalCar,
      icons: [fivePassengers, smallLuggage],
      title: 'Personal',
      info: '3 - 5 passengers',
    },
  ];
  return (
    <>
      <CardHeader
        headerText='What size car do you need?'
        fullWidth
        subHeaderText='Choose as many car types as you like'
      />
      <CardCarousel slides={carTypes} />
      <CardFooter decrementFormStep={decrementFormStep} incrementFormStep={incrementFormStep} skip={skip} step={step} />
    </>
  );
};

export default Step1;
