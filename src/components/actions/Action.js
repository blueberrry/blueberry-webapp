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

const ActionAnchor = styled.a`
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
  text-decoration: none;
`;

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
  ${(props) =>
    props.iconButton &&
    `
    padding: 0.25rem !important;
    width: 35px;
    height: 35px;
    display: grid;
    place-items: center;
  `}
  ${(props) =>
    props.wrapper &&
    `all: unset !important; 
     margin: 0 !important; 
     padding: 0 !important; 
     &:hover {
      cursor: pointer !important;
    }`}
    ${(props) => props.transparent && `background: none;`}
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
  feedbackBtn,
  fullWidth,
  containerStyles,
  iconButton,
  wrapper,
  external,
  transparent,
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

  if (feedbackBtn) {
    if (feedbackBtn === 'standard') {
      buttonStyles = {
        bg: COLOURS.primary,
        pd: [`0.25rem`, `1rem`],
        br: `1px solid ${COLOURS.white}`,
      };
    }
    if (feedbackBtn === 'invert') {
      buttonStyles = {
        bg: COLOURS.lighterGray,
        pd: [`0.25rem`, `1rem`],
        br: `1px solid ${COLOURS.lighterGray}`,
      };
    }
  }

  if (external) {
    return (
      <ActionAnchor
        href={external}
        styles={buttonStyles}
        fullWidth={fullWidth}
        style={containerStyles}
        transparent={transparent}>
        {children}
      </ActionAnchor>
    );
  }

  return (
    <Action
      onClick={handleClick}
      styles={buttonStyles}
      fullWidth={fullWidth}
      style={containerStyles}
      iconButton={iconButton}
      wrapper={wrapper}
      transparent={transparent}>
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
  wrapper: false,
};
Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  propStyles: PropTypes.object,
  wrapper: PropTypes.bool,
};
