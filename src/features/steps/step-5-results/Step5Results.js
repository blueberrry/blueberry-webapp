import React from 'react';
import { ListItem } from '../../../components';

const Step5Results = ({ carResults, carTypes }) => {
  carTypes && console.log('carTypes', JSON.stringify(carTypes, null, 2));
  carResults && console.log('carTypes', JSON.stringify(carResults, null, 2));
  
  if (carResults) {
    const ResultsCards = () =>
      carResults.map((results) => {
        const resultItem = carTypes.find((carType) => carType.UID === results.car);
        const matchRate = Math.round(results.matchRate);
        return <ListItem matchRate={matchRate} data={resultItem}></ListItem>;
      });
    return <ResultsCards />;
  }
  return <p>...Loading</p>;
};

export default Step5Results;
