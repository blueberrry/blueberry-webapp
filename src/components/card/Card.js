import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { Text } from '../text/Text';

const StyledCard = styled.section`
  @media screen and ${BREAKPOINTS.tablet} {
    max-width: 80rem;
  }
  border-radius: ${SIZES.crdBrRd}rem;
  height: 70vh;
  background-color: ${COLOURS.white};
  margin: 0 auto;
  > * {
    border: 1px solid red;
  }
`;

const Card = ({ children, primary, secondary }) => {
  // let cardStyles = {};
  // if (primary) {
  //   cardStyles = {
  //     bg: COLOURS.white,
  //     pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXSm}rem`,
  //     ...cardStyles,
  //   };
  // }

  return <StyledCard>{children}</StyledCard>;
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
