import React from 'react';
import styled from 'styled-components';
import { COLOURS, SIZES, DROP_SHADOWS } from '../../constants';
import Text from '../text/Text';
import { convertCamelCase } from '../../utils';

const SwitchContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${SIZES.spacerUltraSm}rem;
  background: ${COLOURS.lightGray};
  border-radius: 1rem;
  width: 270px;
  height: 40px;
`;
const SwitchStyled = styled.input`
  display: none;
  + label {
    position: absolute;
    width: 145px;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    text-align: center;
    > p > .switch-label-text {
      color: ${COLOURS.primary} !important;
    }
  }
  + label:first-of-type {
    left: 0;
  }
  + label:last-of-type {
    right: 0;
  }
  + label:hover {
    cursor: pointer;
  }
  &:checked + label {
    top: -2px;
    height: 44px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: ${COLOURS.white} !important;
    background: ${COLOURS.primary};
    > p > .switch-label-text {
      transform: translateY(2px);
      display: flex;
      justify-content: center;
      color: ${COLOURS.white} !important;
    }
  }
`;

const Switch = ({ checkedItem, switchItems, handleSwitchChange }) => {
  return (
    <SwitchContainerStyled>
      {switchItems.map((switchItem, index) => {
        const switchName = convertCamelCase(switchItem);
        return (
          <React.Fragment key={index}>
            <SwitchStyled
              type='radio'
              id={switchItem}
              value={switchItem}
              checked={checkedItem === switchItem}
              defaultChecked={true}
              onChange={handleSwitchChange}
            />
            <label htmlFor={switchItem}>
              {
                <Text className='switch-label-text' type='bodyMedium'>
                  {switchName}
                </Text>
              }
            </label>
          </React.Fragment>
        );
      })}
    </SwitchContainerStyled>
  );
};

export default Switch;
