import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import Action from '../actions/Action';
import { BREAKPOINTS, COLOURS, OFFSETS, SIZES } from '../../constants';

const CardSwitchStyled = styled.section`
  @media screen and ${BREAKPOINTS.tablet} {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > .switch {
      margin-left: ${SIZES.spacerMd}rem;
      ${OFFSETS.rightLg}
    }
  }
`;

const CardSwitch = ({ switchItems, checkedItem, handleSwitchChange }) => {
  const SwitchItems = () =>
    switchItems.map((item) => {
      return (
        <>
          <input
            type='radio'
            id={item}
            value={item}
            checked={checkedItem === item}
            defaultChecked={true}
            onChange={handleSwitchChange}
          />
          <label htmlFor={item}>{item}</label>
        </>
      );
    });

  return (
    <CardSwitchStyled>
      <div className='switch'>
        <SwitchItems />
      </div>
    </CardSwitchStyled>
  );
};

export default CardSwitch;
