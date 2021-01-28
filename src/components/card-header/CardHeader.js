import React from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import { BREAKPOINTS, COLOURS, OFFSETS, SIZES, STEP_GRID } from '../../constants';

const CardHeaderStyled = styled.section`
  border: 1px solid pink;
  margin: ${SIZES.spacerXSm}rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${STEP_GRID.fullWidth}
  @media screen and ${BREAKPOINTS.tablet} {
    > h2 > span.card-header {
      font-size: ${SIZES.fntLg}rem;
    }
  }
`;

const CardHeader = ({ headerText, fullWidth = false, subHeaderText }) => {
  return (
    <CardHeaderStyled width100={fullWidth}>
      <h2>
        <Text type='h2' className='card-header' colour={COLOURS.primary}>
          {headerText}
        </Text>
      </h2>
      {subHeaderText && (
        <div className='card-sub-header-container'>
          <Text type='bodySm' className='card-header' colour={COLOURS.primary}>
            {subHeaderText}
          </Text>
        </div>
      )}
    </CardHeaderStyled>
  );
};

export default CardHeader;
