import React, { useEffect, useContext } from 'react';
import ReactGA from 'react-ga';
// import pigImg from '../../../assets/images/pig.svg';
import { FormValuesContext } from '../../../context/FormValuesContext';
import { CardHeader, CardCarousel, CardFooter } from '../../../components';
import personalCar from '../../../assets/images/personal-car.png';
import standardCar from '../../../assets/images/svgs/standard-car.svg';
import largeCar from '../../../assets/images/svgs/large-car.svg';
import familyDog from '../../../assets/images/svgs/dog.svg';
import fivePassengers from '../../../assets/images/svgs/5-passengers.svg';
import standardLuggage from '../../../assets/images/svgs/standard-luggage.svg';
import smallLuggage from '../../../assets/images/svgs/small-luggage.svg';
import largeLuggage from '../../../assets/images/svgs/large-luggage.svg';
import largeLuggage2 from '../../../assets/images/svgs/large-luggage_2.svg';
import ScrollLock from '../../../hocs/ScrollLock';
import standardCarNew from '../../../assets/images/svgs/standard-car-new.svg';
import { LargeCarNew, StandardCarNew, PersonalCarNew } from '../../../components/IconLibrary';

ReactGA.pageview('/question-1');

const Step1 = ({ decrementFormStep, incrementFormStep, setCurrentSlide, skip, step }) => {
  // useEffect(() => {
  //   ReactGA.pageview('question-1');
  // }, []);

  // ReactGA.pageview('question-1');
  // useEffect(() => {
  //   ReactGA.pageview('/question-1');
  // }, []);

  const carTypes = [
    {
      id: 123,
      slideId: 1,
      svg: <LargeCarNew />,
      icons: [
        { icon: fivePassengers, className: 'five-passengers' },
        { icon: largeLuggage2, className: 'large-luggage' },
        { icon: largeLuggage, className: 'large-luggage_2' },

        { icon: familyDog, className: 'dog' },
      ],
      title: 'Large',
      info: '5+ passengers',
    },
    {
      id: 345,
      slideId: 2,
      // svg: <StandardCarNew />,
      img: standardCarNew,
      icons: [
        { icon: fivePassengers, className: 'five-passengers' },
        { icon: smallLuggage, className: 'small-luggage' },
        { icon: familyDog, className: 'dog' },
      ],
      title: 'Standard',
      info: '5 passengers',
    },
    {
      id: 456,
      slideId: 3,
      // svg: <PersonalCarNew />,
      img: personalCar,
      icons: [
        { icon: fivePassengers, className: 'five-passengers' },
        { icon: smallLuggage, className: 'small-luggage' },
      ],
      title: 'City',
      info: '3 - 5 passengers',
    },
  ];

  const formValuesContext = useContext(FormValuesContext);
  return (
    <ScrollLock>
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
    </ScrollLock>
  );
};

export default Step1;
