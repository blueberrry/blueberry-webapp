export const GLOBALS = {
  card: {},
};

export const SIZES = {
  // spacers
  spacerXSm: 1.25,
  spacerSm: 1.75,
  spacerMd: 1.9,
  spacerLg: 2.5,
  spacerXl: 8,

  // offsets
  offsetSm: 1.75,
  offsetMd: 1.9,
  offsetLg: 2.5,

  // button
  btnPdYSm: 1,
  btnPdXSm: 2.5,
  btnPdYLg: 1,
  btnPdXLg: 5,
  btnBrRd: 3,

  // card
  crdBrRd: 1.875,

  // Font Sizes
  h1: 1,
  h2: 1.313,
  h3: 0.875,
  h4: 1,
  body: 1,
  bodyLg: 1.25,
  bodySm: 0.75,
  fntLg: 1.313,

  // device sizes
  mobileSm: 19,
  mobileMd: 23,
  mobileLg: 33,
  tablet: 47,
};

export const OFFSETS = {
  rightLg: `transform: translateX(${SIZES.offsetLg}rem);`,
  leftLg: `transform: translateX(-${SIZES.offsetLg}rem);`,
};

export const FONTS = {
  h1: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.h1}rem; line-height: normal;`,
  h2: `font-family: 'Poppins Bold'; font-size: ${SIZES.h2}rem; line-height: 2.625rem;`,
  h3: `font-family: 'Poppins Bold'; font-size: ${SIZES.h3}rem; line-height: 1.969rem;`,
  h4: `font-family: 'Poppins Bold'; font-size: ${SIZES.h4}rem; line-height: normal;`,
  body: `font-family: 'Poppins Regular'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodyBold: `font-family: 'Poppins Bold'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodyItalic: `font-family: 'Poppins Italic'; font-size: ${SIZES.body}rem; line-height: normal;`,
  body600: `font-family: 'Poppins Bold'; font-size: ${SIZES.body}rem; line-height: normal;`,
  body300: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.body}rem; line-height: normal;`,
  body300Italic: `font-family: 'Poppins Semi Bold Italic'; font-size: ${SIZES.body}rem; line-height: normal;`,
  bodyLg: `font-family: 'Poppins Regular'; font-size: ${SIZES.bodyLg}rem; line-height: normal;`,
  bodyLgBold: `font-family: 'Poppins Bold'; font-size: ${SIZES.bodyLg}rem; line-height: normal;`,
  bodyLgSemiBold: `font-family: 'Poppins Semi Bold'; font-size: ${SIZES.bodyLg}rem; line-height: normal;`,
  bodySm: `font-family: 'Poppins Regular'; font-size: ${SIZES.bodySm}rem; line-height: normal;`,
  bodySmBold: `font-family: 'Poppins Regular'; font-size: ${SIZES.bodySm}rem; line-height: normal;`,
};

export const BREAKPOINTS = {
  mobileSm: `(min-width: ${SIZES.mobileSm}rem)`,
  mobileMd: `(min-width: ${SIZES.mobileMd}rem)`,
  mobileLg: `(min-width: ${SIZES.mobileLg}rem)`,
  tablet: `(min-width: ${SIZES.tablet}rem)`,
};
