import React from 'react';
import styled from 'styled-components';
import chargingPoint from '../../assets/images/charging-point.svg';
import { SIZES, RESETS } from '../../constants';

const ChoiceButtonStyled = styled.button`
  ${RESETS.btnReset}
  border-radius: ${SIZES.crdBrRd}rem;
  border: 1px solid green;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  max-width: 100%;
  margin-bottom: ${SIZES.spacerMd}rem;
`;

const MultiChoice = () => {
  const choiceSelections = [
    { icon: chargingPoint, title: 'Home', info: 'Using your own charger \n (We assume this is A.C. type)' },
    { icon: chargingPoint, title: 'Local public charging point', info: 'Using a charging point close to your home' },
    {
      icon: chargingPoint,
      title: 'Charging points during trips',
      info: 'Using a range of public charging points on the go',
    },
  ];

  return choiceSelections.map((selection) => {
    return (
      <ChoiceButtonStyled>
        <img src={selection.icon} alt='' style={{ flex: '1 0 15%' }} />
        <div style={{ flex: '1 0 85%', border: '1px solid green;' }}>
          <p>{selection.title}</p>
          <p>{selection.info}</p>
        </div>
      </ChoiceButtonStyled>
    );
  });
};

export default MultiChoice;
