import React from 'react';
import { ListItem } from '../../../components';

const Step5Results = ({ carResults, carTypes }) => {
  carTypes && console.log('carTypes', JSON.stringify(carTypes, null, 2));
  carResults && console.log('carTypes', JSON.stringify(carResults, null, 2));

  // if (carResults) {
  //   const ResultsCards = () =>
  //     carResults.map((results) => (
  //       <ListItem>
  //         <p>{results.car}</p>
  //         <p>{results.matchRate}</p>
  //       </ListItem>
  //     ));

  if (carResults) {
    const ResultsCards = () =>
      carResults.map((results) => {
        const resultItem = carTypes.find((carType) => carType.UID === results.car);
        return (
          <ListItem>
            <h3>{`matchrate: ${results.matchRate}`}</h3>
            <ul>
              <li>{`acceleration: ${resultItem['0-62']}`}</li>
              <li>{`abi ins group: ${resultItem['ABI Insurance Group']}`}</li>
              <li>{`battery: ${resultItem['Battery']}`}</li>
              <li>{`fast charge: ${resultItem['FastCharge']}`}</li>
              <li>{`HP: ${resultItem['HP']}`}</li>
              <li>{`Make ${resultItem['Make']}`}</li>
              <li>{`Make Model ${resultItem['MakeModel']}`}</li>
              <li>{`Model ${resultItem['Model']}`}</li>
              <li>{`Normal Charge ${resultItem['NormalCharge']}`}</li>
              <li>{`OTR Price ${resultItem['OTR Price']}`}</li>
              <li>{`Range (WLTP) ${resultItem['Range (WLTP)']}`}</li>
              <li>{`Seats ${resultItem['Seats']}`}</li>
              <li>{`Top Speed ${resultItem['Top Speed']}`}</li>
              <li>{`Type 1 ${resultItem['Type 1']}`}</li>
              <li>{`Type 2 ${resultItem['Type 2']}`}</li>
              <li>{`UID ${resultItem['UID']}`}</li>
              <li>{`imgURL ${resultItem['imgURL']}`}</li>
            </ul>
          </ListItem>
        );
      });
    return <ResultsCards />;
  }
  return <p>...Loading</p>;
};

export default Step5Results;
