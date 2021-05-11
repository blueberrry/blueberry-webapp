import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { SIZES, BREAKPOINTS, FONTS } from '../../constants';

const StyledH1 = styled.h1`
  > span.logo {
    font-size: ${SIZES.h1Xl}rem;
  }
`;

const StyledH2 = styled.h2`
  span.h2 {
    font-size: ${SIZES.h2Lg}rem;
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    span.h2 {
      font-size: ${SIZES.h2Lg}rem;
    }
  }
`;

const StyledH3 = styled.h3`
  &.centered {
    text-align: center;
  }
`;

const StyledH4 = styled.h4`
  span.h4 {
    font-weight: 600;
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    span.h4 {
      font-size: ${SIZES.h4Lg}rem;
    }
  }
`;

const StyledH5 = styled.h5`
  span.h5 {
    ${FONTS.h5}
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    span.h5 {
      font-size: ${SIZES.h5Lg}rem;
    }
  }
`;

const StyledBody = styled.p`
  > span.p {
    ${(props) => props.medium && FONTS.bodyMedium}
    ${(props) => props.semiBold && FONTS.bodySemiBold}
    ${(props) => props.bold && FONTS.bodyBold}
  }
  > span.small {
    font-size: ${SIZES.bodySm}rem;
  }
  > span.main-action {
    font-size: ${SIZES.bodyLg}rem;
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    span.small {
      font-size: ${SIZES.bodyMd}rem;
    }
    span.p {
      font-size: ${SIZES.bodyLg}rem;
    }
  }
`;

const StyledText = styled.span`
  ${(props) => props.fnt}
  color: ${(props) => props.colour};
  transition: font-size 0.2s ease-in;
  &.step-label--inactive {
    transition: font-size 0.2s ease-in;
  }
  &.step-label--active {
    display: block;
    font-size: ${SIZES.bodyLg}rem;
    font-weight: 600;
    transform: translateY(${SIZES.spacerUltraSm}rem);
  }
  &.font-large {
    font-size: 1.875rem;
  }
`;

const Text = ({ type, colour, children, className, tagClassName, style, enlarge }) => {
  const TextTag = ({ children, className }) => {
    switch (type) {
      case 'h1':
        return <StyledH1 style={style}>{children}</StyledH1>;
      case 'h2':
        return <StyledH2 style={style}>{children}</StyledH2>;
      case 'h3':
        return <StyledH3 style={style}>{children}</StyledH3>;
      case 'h4':
        return <StyledH4 style={style}>{children}</StyledH4>;
      case 'h5':
        return <StyledH5 style={style}>{children}</StyledH5>;
      case 'body':
        return <StyledBody style={style}>{children}</StyledBody>;
      case 'bodyMedium':
        return (
          <StyledBody medium style={style}>
            {children}
          </StyledBody>
        );
      case 'bodySemiBold':
        return (
          <StyledBody semiBold style={style}>
            {children}
          </StyledBody>
        );
      case 'bodyBold':
        return (
          <StyledBody bold style={style}>
            {children}
          </StyledBody>
        );
      default:
        return <StyledBody style={style}>{children}</StyledBody>;
    }
  };
  return (
    <TextTag>
      <StyledText fnt={FONTS[type]} colour={colour} className={[type, className]} enlarge={enlarge}>
        {children}
      </StyledText>
    </TextTag>
  );
};

export default Text;

Text.defaultProps = {
  regular: 'primary',
  colour: '#000',
  className: '',
};
Text.propTypes = {
  type: PropTypes.string,
  colour: PropTypes.string,
  className: PropTypes.string,
};
