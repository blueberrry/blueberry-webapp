import { createGlobalStyle } from 'styled-components';
import PoppinsRegular from './Poppins-Regular.ttf';
import PoppinsItalic from './Poppins-Italic.ttf';
import PoppinsLight from './Poppins-Light.ttf';
import PoppinsBold from './Poppins-Bold.ttf';
import PoppinsSemiBold from './Poppins-SemiBold.ttf';
import PoppinsSemiBoldItalic from './Poppins-SemiBoldItalic.ttf';
import PoppinsMedium from './Poppins-Medium.ttf';

export default createGlobalStyle`
  #blockColorblineContent {
    visibility: hidden;
    height: 0;
    z-index: -999;
    position: absolute;
    top: -1000px;
    left: -1000px;
  }
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
  @font-face {
    font-family: 'Poppins Medium';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: bold;
    font-display: auto;
  }
`;
