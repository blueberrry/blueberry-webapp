import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES } from '../../constants';
import Switch from '../switch/Switch';

const CardSwitchStyled = styled.section`
  // @media screen ${BREAKPOINTS.tabletSm} {
  //   margin-bottom: ${SIZES.spacerMd}rem;
  // }
  // margin-bottom: ${SIZES.spacerMd}rem;
  // margin-bottom: 29px;
`;

const CardSwitch = ({ switchItems, checkedItem, handleSwitchChange }) => {
  return (
    <CardSwitchStyled className='card-switch'>
      <Switch switchItems={switchItems} checkedItem={checkedItem} handleSwitchChange={handleSwitchChange} />
    </CardSwitchStyled>
  );
};

export default CardSwitch;
