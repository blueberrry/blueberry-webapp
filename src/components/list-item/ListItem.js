import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { Text } from '../text/Text';

const StyledListItem = styled.section`
  min-height: 10.5rem;
  border-radius: ${SIZES.crdBrRd}rem;
  background-color: ${COLOURS.white};
  margin: ${SIZES.spacerXSm}rem;
  // @media screen and ${BREAKPOINTS.tablet} {
  //   max-width: 80rem;
  //   min-height: 40.5rem;
  // }
  // > * {
  //   border: 1px solid red;
  // }
`;

const ListItem = ({ children }) => {
  // let cardStyles = {};
  // if (primary) {
  //   cardStyles = {
  //     bg: COLOURS.white,
  //     pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXSm}rem`,
  //     ...cardStyles,
  //   };
  // }

  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
