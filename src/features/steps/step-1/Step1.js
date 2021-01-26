import React from 'react';
// import pigImg from '../../../assets/images/pig.svg';
import { CardHeader, CardCarousel, CardFooter } from '../../../components';
import personalCar from '../../../assets/images/personal-car.svg';
import standardCar from '../../../assets/images/standard-car.svg';
import largeCar from '../../../assets/images/large-car.svg';
import familyBriefcase from '../../../assets/images/family-briefcase.svg';
import familyCouple from '../../../assets/images/family-couple.svg';
import familyDog from '../../../assets/images/family-dog.svg';
import familyLarge from '../../../assets/images/family-large.svg';
import familyLuggage1 from '../../../assets/images/family-luggage_01.svg';
import familyLuggage2 from '../../../assets/images/family-luggage_02.svg';
import familyLuggage3 from '../../../assets/images/family-luggage_03.svg';
import familyLuggage4 from '../../../assets/images/family-luggage_04.svg';

const Step2 = ({ incrementFormStep }) => {
  const carTypes = [
    {
      id: 123,
      slideId: 1,
      img: largeCar,
      icons: [familyLarge, familyLuggage1, familyLuggage3, familyDog],
      title: 'Large',
      info: '5+ passengers',
    },
    {
      id: 345,
      slideId: 2,
      img: standardCar,
      icons: [familyLarge, familyLuggage1, familyDog],
      title: 'Standard',
      info: '5 passengers',
    },
    {
      id: 456,
      slideId: 3,
      img: personalCar,
      icons: [familyCouple, familyLuggage2, familyLuggage4],
      title: 'Personal',
      info: '3 - 5 passengers',
    },
  ];
  return (
    <>
      <CardHeader
        headerText='What type of car are you looking for?'
        fullWidth
        subHeaderText='Choose as many car types as you like'
      />
      <CardCarousel slides={carTypes} />
      <CardFooter incrementFormStep={incrementFormStep} />
    </>
  );
};

export default Step2;
