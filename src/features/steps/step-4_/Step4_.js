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
import ScrollLock from '../../../hocs/ScrollLock';
import standardCarNew from '../../../assets/images/svgs/standard-car-new.svg';
import { House, Mobile, Road } from '../../../components/IconLibrary';

ReactGA.pageview('/question-1');

const Step4 = ({ decrementFormStep, incrementFormStep, setCurrentSlide, skip, step, postData }) => {
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
      svg: <Mobile />,
      icons: [],
      subTitle: 'Local public charging points',
      info2: 'Using a charging point close to your home',
    },
    {
      id: 345,
      slideId: 2,
      svg: <House />,
      icons: [],
      subTitle: 'Home',
      info2: 'Using your own charger (We assume this is A.C type)',
    },
    {
      id: 456,
      slideId: 3,
      svg: <Road />,
      icons: [],
      subTitle: 'Charging points during trips',
      info2: 'Using a range of public charging points on the go',
    },
  ];

  const formValuesContext = useContext(FormValuesContext);
  return (
    <ScrollLock>
      <CardHeader
        headerText='Where will you usually re-charge your car?'
        fullWidth
        subHeaderText='Choose as many car types as you like'
      />
      <CardCarousel slides={carTypes} />
      <CardFooter
        decrementFormStep={decrementFormStep}
        // incrementFormStep={(e) => {
        //   e.preventDefault();
        //   setCurrentSlide(formValuesContext.currentSlide);
        //   incrementFormStep();
        // }}
        skip={skip}
        step={step}
        postData={(e) => postData(e, formValuesContext.currentSlide)}
      />
    </ScrollLock>
  );
};

export default Step4;
