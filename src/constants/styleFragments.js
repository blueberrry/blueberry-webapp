export const STEP_GRID = {
  fullWidth: `grid-column: 1 / span 2;`,
  lhs: `grid-column: 1 / span 1;`,
  rhs: `grid-column: 2 / span 1;`,
};

export const DROP_SHADOWS = {
  primary: `
  filter: drop-shadow(-3px 1px 2px rgba(75, 75, 75, 0.3));
  -webkit-filter: drop-shadow(-3px  px 2px rgba(75, 75, 75, 0.3));
  -moz-filter: drop-shadow(-3px 2px 2px rgba(75, 75, 75, 0.3));
`,
  secondary: `filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  -moz-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));`,
  secondaryActive: `filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.35));
  -webkit-filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.35));
  -moz-filter: drop-shadow(0px 9px 4px rgba(0, 0, 0, 0.35));`,
};
