import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { Text } from '../text/Text';

const StyledCard = styled.section`
  //min-height: 40.5rem;
  // max-height: 80vh;
  height: ${(props) => (!props.resultsPage ? '80vh' : 'auto')};
  border-radius: ${SIZES.crdBrRd}rem;
  background-color: ${(props) => (!props.resultsPage ? COLOURS.white : COLOURS.primary)};
  margin: ${SIZES.spacerXSm}rem;
  @media screen and ${BREAKPOINTS.tablet} {
    max-width: 80rem;
    min-height: 40.5rem;
    height: unset;
  }
  > * {
    // border: 1px solid red;
  }
`;

const Card = ({ children, resultsPage }) => {
  // let cardStyles = {};
  // if (primary) {
  //   cardStyles = {
  //     bg: COLOURS.white,
  //     pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXSm}rem`,
  //     ...cardStyles,
  //   };
  // }

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
