import styled from 'styled-components';
import { BREAKPOINTS, STEP_GRID, SIZES } from '../../constants';
import CardSwitch from '../card-switch/CardSwitch';
import CardRange from '../card-range/CardRange';

const CardMainStyled = styled.section`
  ${STEP_GRID.fullWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin: ${SIZES.spacerXSm}rem;
  margin: 0;
  padding: 0 ${SIZES.spacerXSm}rem;
  @media screen and ${BREAKPOINTS.tabletSm} {
    ${STEP_GRID.rhs}
    ${(props) => !props.noMargin && `margin: ${SIZES.spacerLg}rem;`}
  }
`;
const CardMain = ({ children, noMargin }) => {
  return <CardMainStyled noMargin={noMargin}>{children}</CardMainStyled>;
};

export default CardMain;
