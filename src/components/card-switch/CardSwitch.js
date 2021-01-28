import React from 'react';
import styled from 'styled-components';

const CardSwitchStyled = styled.section``;

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
