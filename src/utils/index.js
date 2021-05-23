import { URL_ROOT } from '../constants';
export const buildImgSrc = (url) => {
  const imgRoot = url.split('.')[0];
  const imgExtLarge = 'x750';
  const imgFileExt = '.jpg';
  const imgSrc = `${URL_ROOT}${imgRoot}${imgExtLarge}${imgFileExt}`;
  return imgSrc;
};

export const buildLogoImgSrc = (url) => {
  const imgSrc = `${url}`;
  return imgSrc;
};

export const convertCamelCase = (text) => {
  var result = text.replace(/([A-Z])/g, ' $1');
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};


