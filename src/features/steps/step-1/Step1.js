import React from 'react';
// import pigImg from '../../../assets/images/pig.svg';
import { CardHeader, CardCarousel, CardFooter } from '../../../components';

const Step2 = ({ incrementFormStep }) => {
  const carTypes = [
    {
      id: 123,
      slideId: 1,
      img: '',
      title: 'SUV',
      info: '4 door car with a large boot that offers comfort for passengers.',
    },
    {
      id: 345,
      slideId: 2,
      img: '',
      title: 'Saloon',
      info: '4 door car with a large boot that offers comfort for passengers.',
    },
    {
      id: 456,
      slideId: 3,
      img: '',
      title: 'Hatchback',
      info: '4 door car with a large boot that offers comfort for passengers.',
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
