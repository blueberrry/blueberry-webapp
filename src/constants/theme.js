export const GLOBALS = {
  card: {},
};

export const SIZES = {
  // spacers
  spacerBase: 1,

  // spacerUltraSm: 0.3,
  // spacerXXSm: 0.75,
  // spacerXSm: 1.25,
  // spacerSm: 1.65,
  // spacerMd: 1.9,
  // spacerLg: 2.5,
  // spacerXl: 8,

  spacerUltraSm: 0.3,
  spacerXXSm: 0.65,
  spacerXSm: 1.2,
  spacerSm: 1.5,
  spacerMd: 1.8,
  spacerLg: 2.3,
  spacerXl: 7.5,

  spacerGridGap: 2,

  carouselSm: 0.25,
  carouselMd: 0.5,

  // offsets
  offsetSm: 1.75,
  offsetMd: 1.9,
  offsetLg: 2.5,

  // button
  btnPdXXSm: 1.5,
  btnPdYSm: 0.5,
  btnPdXSm: 2.5,
  btnPdYLg: 1,
  btnPdXLg: 5,
  btnBrRd: 2.5,
  btnBrRdSm: 1,

  // card
  crdBrRd: 1.25,

  // Font Sizes
  h1: 1, // 16
  h1Xl: 1.75,
  h2: 1.313, // 21
  h2Lg: 1.625,
  h3: 1,
  h3Lg: 1.15,
  h4: 0.875, // 14
  h4Lg: 1, // 16
  h5: 0.75,
  h5Lg: 0.875,
  body: 1, // 16
  bodyLg: 1.25, // 20
  bodyMd: 0.875, // 14
  bodySm: 0.75, // 12

  // device sizes
  mobileSm: 19,
  mobileMd: 23,
  mobileLg: 33,
  mobileXl: 40,
  // tablet: 47,
  tabletSm: 48,
  tablet: 62.5,
};

export const OFFSETS = {
  rightLg: `transform: translateX(${SIZES.offsetLg}rem);`,
  leftLg: `transform: translateX(-${SIZES.offsetLg}rem);`,
};

export const FONTS = {
  h1: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.h1}rem; line-height: normal;`,
  h2: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.h2}rem; line-height: 2.625rem;`,
  h3: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.h3}rem; line-height: normal;`,
  h4: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.h4}rem; line-height: normal;`,
  h5: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.h5}rem; line-height: normal;`,
  body: `font-family: 'Poppins Regular'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodyBold: `font-family: 'Poppins Bold'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodyItalic: `font-family: 'Poppins Italic'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodySemiBold: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodyMedium: `font-family: 'Poppins Medium'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodyLight: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodyLightItalic: `font-family: 'Poppins Semi Bold Italic'; font-size: ${SIZES.body}rem; line-height: normal;`,
  logo: `font-family: 'Poppins Bold'; font-size: ${SIZES.h4}rem; line-height: normal;`,
};

export const BREAKPOINTS = {
  mobileSm: `(min-width: ${SIZES.mobileSm}rem)`,
  mobileMd: `(min-width: ${SIZES.mobileMd}rem)`,
  mobileLg: `(min-width: ${SIZES.mobileLg}rem)`,
  mobileXl: `(min-width: ${SIZES.mobileXl}rem)`,
  tabletSm: `(min-width: ${SIZES.tabletSm}rem)`,
  tablet: `(min-width: ${SIZES.tablet}rem)`,
};
