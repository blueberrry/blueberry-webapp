import { createGlobalStyle } from 'styled-components';
import { FONTS, COLOURS, RESETS } from '../constants/index';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background-color: ${COLOURS.primary};
    ${FONTS.body}
  }
`;

export default GlobalStyles;

//${RESETS.rangeReset};
