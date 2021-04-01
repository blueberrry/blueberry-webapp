import React from 'react';
import styled from 'styled-components';
import chargingPoint from '../../assets/images/charging-point.svg';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { Text } from '../../components';

const ChoiceButtonStyled = styled.button`
  ${RESETS.btnReset}
  max-width: 100%;
  min-height: 5.625rem;
  border-radius: 0.75rem;
  border: 1px solid ${COLOURS.primary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  margin-bottom: ${SIZES.spacerXXSm}rem;
  @media screen and ${BREAKPOINTS.tabletSm} {
    margin-bottom: ${SIZES.spacerXSm}rem;
  }
  padding: 0 ${SIZES.spacerXSm}rem;
  background: ${COLOURS.white};
  color: ${COLOURS.primary};
  ${(props) => props.isActive && `background: ${COLOURS.primary}; color: ${COLOURS.white};`}
  &:hover {
    cursor: pointer;
  }
`;

const MultiChoice = ({ choiceSelections, activeId, handleMultiChange }) => {
  return choiceSelections.map((selection, index) => {
    const isActive = activeId === selection.id;
    return (
      <ChoiceButtonStyled
        value={selection.id}
        isActive={isActive}
        onClick={handleMultiChange('chargingLocationId')}
        key={`${selection.id}-blueberry-${index}`}>
        <div style={{ width: '15%' }}>{selection.icon}</div>
        <div
          style={{
            width: `calc(85% - ${SIZES.spacerXXSm}rem`,
            paddingLeft: `${SIZES.spacerXXSm}rem`,
          }}>
          <Text type='h4' colour={isActive ? COLOURS.white : COLOURS.primary}>
            {selection.title}
          </Text>
          <Text type='body' colour={isActive ? COLOURS.white : COLOURS.primary} className='small'>
            {selection.info}
          </Text>
        </div>
      </ChoiceButtonStyled>
    );
  });
};

export default MultiChoice;
