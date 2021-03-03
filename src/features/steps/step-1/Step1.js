import React, { useContext } from 'react';
// import pigImg from '../../../assets/images/pig.svg';
import { FormValuesContext } from '../../../context/FormValuesContext';
import { CardHeader, CardCarousel, CardFooter } from '../../../components';
import personalCar from '../../../assets/images/svgs/personal-car.svg';
import standardCar from '../../../assets/images/svgs/standard-car.svg';
import largeCar from '../../../assets/images/svgs/large-car.svg';
import familyDog from '../../../assets/images/svgs/dog.svg';
import fivePassengers from '../../../assets/images/svgs/5-passengers.svg';
import standardLuggage from '../../../assets/images/svgs/standard-luggage.svg';
import smallLuggage from '../../../assets/images/svgs/small-luggage.svg';
import largeLuggage from '../../../assets/images/svgs/large-luggage.svg';

const Step1 = ({ decrementFormStep, incrementFormStep, setCurrentSlide, skip, step }) => {
  const carTypes = [
    {
      id: 123,
      slideId: 1,
      img: largeCar,
      icons: [
        { icon: fivePassengers, className: 'five-passengers' },
        { icon: largeLuggage, className: 'large-luggage' },
        { icon: familyDog, className: 'dog' },
      ],
      title: 'Large',
      info: '5+ passengers',
    },
    {
      id: 345,
      slideId: 2,
      img: standardCar,
      icons: [
        { icon: fivePassengers, className: 'five-passengers' },
        { icon: standardLuggage, className: 'standard-luggage' },
        { icon: familyDog, className: 'dog' },
      ],
      title: 'Standard',
      info: '5 passengers',
    },
    {
      id: 456,
      slideId: 3,
      img: personalCar,
      icons: [
        { icon: fivePassengers, className: 'five-passengers' },
        { icon: smallLuggage, className: 'small-luggage' },
      ],
      title: 'Personal',
      info: '3 - 5 passengers',
    },
  ];

  const formValuesContext = useContext(FormValuesContext);
  return (
    <>
      <CardHeader
        headerText='What size car do you need?'
        fullWidth
        subHeaderText='Choose as many car types as you like'
      />
      <CardCarousel slides={carTypes} />
      <CardFooter
        decrementFormStep={decrementFormStep}
        incrementFormStep={(e) => {
          e.preventDefault();
          setCurrentSlide(formValuesContext.currentSlide);
          incrementFormStep();
        }}
        skip={skip}
        step={step}
      />
    </>
  );
};

export default Step1;
