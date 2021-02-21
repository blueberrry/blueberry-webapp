import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { SIZES, BREAKPOINTS, FONTS } from '../../constants';

const StyledH1 = styled.h1`
  > span.logo {
    font-size: ${SIZES.h1Xl}rem;
  }
  @media screen and ${BREAKPOINTS.tablet} {
    // span.h2 {
    //   font-size: ${SIZES.h1Lg}rem;
    // }
  }
`;

const StyledH2 = styled.h2`
  @media screen and ${BREAKPOINTS.tablet} {
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
  @media screen and ${BREAKPOINTS.tablet} {
    span.h4 {
      font-size: ${SIZES.h4Lg}rem;
    }
  }
`;

const StyledBody = styled.p`
  > span.p {
    ${(props) => props.semiBold && FONTS.bodyBold}
    ${(props) => props.semiBold && FONTS.bodySemiBold}
    ${(props) => props.bold && FONTS.bodyBold}
  }
  > span.small {
    font-size: ${SIZES.bodySm}rem;
  }
  > span.main-action {
    font-size: ${SIZES.bodyLg}rem;
  }
  @media screen and ${BREAKPOINTS.tablet} {
    span.p {
      font-size: ${SIZES.bodyLg}rem;
    }
  }
`;

const StyledText = styled.span`
  ${(props) => props.fnt}
  color: ${(props) => props.colour};
  transition: font-size 2s ease-in;
  &.step-label--active {
    display: block;
    font-size: ${SIZES.bodyLg}rem;
    font-weight: 600;
    transform: translateY(${SIZES.spacerUltraSm}rem);
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
      case 'body':
        return <StyledBody style={style}>{children}</StyledBody>;
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
