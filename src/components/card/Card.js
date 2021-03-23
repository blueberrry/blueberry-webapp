import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { Text } from '../text/Text';

const StyledCard = styled.section`
  height: ${(props) => (props.lastFormStep || props.resultsPage ? 'auto' : '70vh')};
  border-radius: ${SIZES.crdBrRd}rem;
  background-color: ${(props) => (!props.resultsPage ? COLOURS.white : COLOURS.primary)};
  margin: ${SIZES.spacerXSm}rem;
  @media screen and ${BREAKPOINTS.mobileXl} {
    max-width: 80rem;
    min-height: 32.5rem;
    height: unset !important;
    // margin: ${SIZES.spacerGridGap}rem;
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    margin: 1rem;
  }
  @media screen and ${BREAKPOINTS.tablet} {
    margin: ${SIZES.spacerGridGap}rem;
  }
`;

const Card = ({ children, resultsPage, lastFormStep }) => {
  return (
    <StyledCard resultsPage={resultsPage} lastFormStep={lastFormStep}>
      {children}
    </StyledCard>
  );
};

export default Card;

Card.defaultProps = {
  text: '',
  handleClick: () => {},
  primary: false,
  secondary: false,
  propStyles: {},
};
Card.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  propStyles: PropTypes.object,
};
