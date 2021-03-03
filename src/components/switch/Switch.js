import React from 'react';
import styled from 'styled-components';
import { COLOURS, SIZES, DROP_SHADOWS } from '../../constants';
import { convertCamelCase } from '../../utils';

const SwitchContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${SIZES.spacerUltraSm}rem;
  background: ${COLOURS.lightGray};
  border-radius: 3rem;
`;
const SwitchStyled = styled.input`
  display: none;
  + label {
    padding: 0.5rem 1rem;
    border-radius: 3rem;
    margin-right: 0.4rem;
  }
  + label:hover {
    cursor: pointer;
  }
  &:checked + label {
    ${DROP_SHADOWS.primary}
    color: ${COLOURS.white};
    background: ${COLOURS.primary};
  }
`;

const Switch = ({ checkedItem, switchItems, handleSwitchChange }) => {
  return (
    <SwitchContainerStyled>
      {switchItems.map((switchItem) => {
        const switchName = convertCamelCase(switchItem);
        return (
          <>
            <SwitchStyled
              type='radio'
              id={switchItem}
              value={switchItem}
              checked={checkedItem === switchItem}
              defaultChecked={true}
              onChange={handleSwitchChange}
            />
            <label htmlFor={switchItem}>{switchName}</label>
          </>
        );
      })}
    </SwitchContainerStyled>
  );
};

export default Switch;
