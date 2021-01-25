import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONTS } from '../../constants';

const StyledText = styled.span`
  ${(props) => props.fnt}
  color: ${(props) => props.colour};
`;

const Text = ({ type, colour, children, className }) => {
  return (
    <StyledText fnt={FONTS[type]} colour={colour} className={className}>
      {children}
    </StyledText>
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
