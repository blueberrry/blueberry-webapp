import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOURS, SIZES, STYLED, RESETS, BREAKPOINTS } from '../../constants';
import { Text } from '../text/Text';

const Action = styled.button`
  ${RESETS.btnReset}
  background-color: ${(props) => props.styles.bg || COLOURS.white};
  padding: ${(props) => props.styles.pd};
  @media screen and ${BREAKPOINTS.tablet} {
    padding: ${(props) => props.styles.pdLg};
  }
  border-radius: ${(props) => (props.fullWidth ? 0 : `${SIZES.btnBrRd}rem`)};
  ${(props) => props.fullWidth && 'width: 100%; margin-bottom: -1px;'}
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({ handleClick, children, primary, secondary, tertiary, modest, modalPrimary, fullWidth }) => {
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
      bg: COLOURS.primary,
      pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXXSm}rem`,
      pdLg: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXSm}rem`,
      ...buttonStyles,
    };
  }
  if (tertiary) {
    buttonStyles = {
      bg: COLOURS.secondary,
      pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXXSm}rem`,
      pdLg: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXSm}rem`,
      ...buttonStyles,
    };
  }
  if (modest) {
    buttonStyles = {
      bg: COLOURS.white,
      pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXXSm}rem`,
      pdLg: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXSm}rem`,
      ...buttonStyles,
    };
  }
  if (fullWidth) {
    buttonStyles = {
      bg: COLOURS.secondary,
      pd: `${SIZES.btnPdYLg}rem ${SIZES.btnPdXLg}rem`,
      ...buttonStyles,
    };
  }

  if (modalPrimary) {
    buttonStyles = {
      bg: COLOURS.secondary,
      pd: `${SIZES.btnPdYSm}rem ${SIZES.btnPdXXSm}rem`,
      ...buttonStyles,
    };
  }

  return (
    <Action onClick={handleClick} styles={buttonStyles} fullWidth={fullWidth}>
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
