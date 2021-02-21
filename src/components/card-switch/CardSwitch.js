import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES } from '../../constants';
import Switch from '../switch/Switch';

const CardSwitchStyled = styled.section`
  margin-bottom: ${SIZES.spacerMd}rem;
`;

const CardSwitch = ({ switchItems, checkedItem, handleSwitchChange }) => {
  return (
    <CardSwitchStyled>
      <Switch switchItems={switchItems} checkedItem={checkedItem} handleSwitchChange={handleSwitchChange} />
    </CardSwitchStyled>
  );
};

export default CardSwitch;
