import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
// import { useWindowSize } from '../../../hooks/windowResize';
import { ListItem, Loader } from '../../../components';

const Step5Results = ({ carResults, carTypes, resultsId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [width, height] = useWindowSize();
  // const [isDesktop, setIsDesktop] = useState(null);
  // useEffect(() => {
  //   width > 1000 ? setIsDesktop(true) : setIsDesktop(false);
  // }, [width]);

  if (carResults) {
    const ResultsCards = () =>
      carResults.map((results) => {
        const resultItem = carTypes.find((carType) => carType.UID === results.car);
        const matchRate = Math.round(results.matchRate);
        return <ListItem key={resultItem.UID} matchRate={matchRate} data={resultItem} resultsId={resultsId}></ListItem>;
      });
    return <ResultsCards />;
  }
  return <Loader />;
};

export default React.memo(Step5Results);
