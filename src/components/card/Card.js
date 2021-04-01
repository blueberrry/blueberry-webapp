import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { Text } from '../text/Text';

const StyledCard = styled.section`
  height: ${(props) => (props.resultsPage ? 'auto' : '570px')};
  border-radius: ${SIZES.crdBrRd}rem;
  background-color: ${(props) => (!props.resultsPage ? COLOURS.white : COLOURS.primary)};
  margin: ${SIZES.spacerXSm}rem;
  margin-top: 0;
  @media screen and ${BREAKPOINTS.mobileXl} {
    max-width: 80rem;
    min-height: 34rem;
    height: unset !important;
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    margin: 1rem;
  }
`;

const Card = ({ children, resultsPage }) => {
  return <StyledCard resultsPage={resultsPage}>{children}</StyledCard>;
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
