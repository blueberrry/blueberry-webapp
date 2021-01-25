import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOURS, SIZES, STYLED, RESETS } from '../../constants';
import { Text } from '../text/Text';

const Action = styled.button`
  ${RESETS.btnReset}
  background-color: ${(props) => props.styles.bg};
  padding: ${(props) => props.styles.pd};
  border-radius: ${SIZES.btnBrRd}rem;
`;

const Button = ({ handleClick, children, primary, secondary, modest }) => {
  let buttonStyles = {};
  if (primary) {
    buttonStyles = {
      bg: COLOURS.primary,
      pd: `${SIZES.btnPdYLg}rem ${SIZES.btnPdXLg}rem`,
      ...buttonStyles,
    };
  }
  if (secondary) {
    buttonStyles = {
      bg: COLOURS.secondary,
      pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXSm}rem`,
      ...buttonStyles,
    };
  }
  if (modest) {
    buttonStyles = {
      bg: COLOURS.white,
      pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXSm}rem`,
      ...buttonStyles,
    };
  }

  return (
    <Action onClick={handleClick} styles={buttonStyles}>
      {children}
    </Action>
  );
};

export default Button;

Button.defaultProps = {
  text: '',
  handleClick: () => {},
  primary: false,
  secondary: false,
  propStyles: {},
};
Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  propStyles: PropTypes.object,
};
