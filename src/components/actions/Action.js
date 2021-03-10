import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLOURS, SIZES, STYLED, RESETS, BREAKPOINTS } from '../../constants';
import { Text } from '../text/Text';

const DEFAULT_PADDING = css`0.5rem 1rem`;

const configureMinPadding = (pdL, pdR) => {
  if (pdL || pdR) {
    return css`calc(${(props) => props.styles.pd[0]} * 0.666) calc(${(props) => props.styles.pd[1]} * 0.5)`;
  }
  return DEFAULT_PADDING;
};

const Action = styled.button`
  ${RESETS.btnReset}
  background-color: ${(props) => props.styles.bg || COLOURS.white};
  padding: ${(props) =>
    configureMinPadding(props.styles.pd && props.styles.pd[0], props.styles.pd && props.styles.pd[1])};
  @media screen and ${BREAKPOINTS.mobileMd} {
    padding: ${(props) => (props.styles.pd && props.styles.pd.join(' ')) || DEFAULT_PADDING};
  }
  @media screen and ${BREAKPOINTS.tablet} {
    padding: ${(props) => (props.styles.pd && props.styles.pd.join(' ')) || DEFAULT_PADDING};
  }
  border-radius: ${(props) => (props.fullWidth ? 0 : `${SIZES.btnBrRd}rem`)};
  ${(props) => props.fullWidth && 'width: 100%; margin-bottom: -1px;'}
  border: ${(props) => props.styles.br || 'none'};
  &:hover {
    cursor: pointer;
  }
`;

const Button = ({
  handleClick,
  children,
  primary,
  secondary,
  tertiary,
  modest,
  modalPrimary,
  invert,
  fullWidth,
  containerStyles,
}) => {
  let buttonStyles = {};
  if (primary) {
    buttonStyles = {
      bg: COLOURS.primary,
      pd: [`${SIZES.btnPdYLg}rem`, `${SIZES.btnPdXLg}rem`],
    };
  }
  if (secondary) {
    buttonStyles = {
      bg: COLOURS.primary,
      pd: [`${SIZES.btnPdYSm}rem`, `${SIZES.btnPdXXSm}rem`],
      pdLg: [`${SIZES.btnPdYSm}rem`, `${SIZES.btnPdXSm}rem`],
    };
  }
  if (tertiary) {
    buttonStyles = {
      bg: COLOURS.secondary,
      pd: [`${SIZES.btnPdYSm}rem`, `${SIZES.btnPdXXSm}rem`],
      pdLg: [`${SIZES.btnPdYSm}rem`, `${SIZES.btnPdXSm}rem`],
    };
  }
  if (modest) {
    buttonStyles = {
      bg: COLOURS.white,
      pd: [`${SIZES.btnPdYSm}rem`, `${SIZES.btnPdXXSm}rem`],
      pdLg: [`${SIZES.btnPdYSm}rem`, `${SIZES.btnPdXSm}rem`],
    };
  }
  if (fullWidth) {
    buttonStyles = {
      bg: COLOURS.secondary,
      pd: [`${SIZES.btnPdYLg}rem`, `${SIZES.btnPdXLg}rem`],
    };
  }
  if (modalPrimary) {
    buttonStyles = {
      bg: COLOURS.secondary,
      pd: [`${SIZES.btnPdYSm}rem`, `${SIZES.btnPdXXSm}rem`],
    };
  }

  if (invert) {
    buttonStyles = {
      bg: COLOURS.primary,
      pd: [`${SIZES.btnPdYSm}rem`, `${SIZES.btnPdXXSm}rem`],
      br: `1px solid ${COLOURS.white}`,
    };
  }

  return (
    <Action onClick={handleClick} styles={buttonStyles} fullWidth={fullWidth} style={containerStyles}>
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
