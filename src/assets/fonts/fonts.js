import { createGlobalStyle } from 'styled-components';
import PoppinsRegular from './Poppins-Regular.ttf';
import PoppinsItalic from './Poppins-Italic.ttf';
import PoppinsLight from './Poppins-Light.ttf';
import PoppinsBold from './Poppins-Bold.ttf';
import PoppinsSemiBold from './Poppins-SemiBold.ttf';
import PoppinsSemiBoldItalic from './Poppins-SemiBoldItalic.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Poppins Regular';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins Italic';
    src: url(${PoppinsItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins Light';
    src: url(${PoppinsLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins Bold';
    src: url(${PoppinsBold}) format('truetype');
    font-weight: 700;
    font-style: bold;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins Semi Bold';
    src: url(${PoppinsSemiBold}) format('truetype');
    font-weight: 600;
    font-style: bold;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins Semi Bold Italic';
    src: url(${PoppinsSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: bold;
    font-display: auto;
  }
`;
