import { createGlobalStyle } from 'styled-components';
import { FONTS, COLOURS, RESETS } from '../constants/index';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${COLOURS.primary};
    ${FONTS.body}
  }
`;

export default GlobalStyles;

//${RESETS.rangeReset};
