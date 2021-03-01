import React, { useEffect } from 'react';
import { ListItem } from '../../../components';

const Step5Results = ({ carResults, carTypes }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (carResults) {
    const ResultsCards = () =>
      carResults.map((results) => {
        const resultItem = carTypes.find((carType) => carType.UID === results.car);
        const matchRate = Math.round(results.matchRate);
        return <ListItem key={resultItem.UID} matchRate={matchRate} data={resultItem}></ListItem>;
      });
    return <ResultsCards />;
  }
  return <p>...Loading</p>;
};

export default React.memo(Step5Results);
