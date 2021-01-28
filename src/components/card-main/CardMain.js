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
  margin: ${SIZES.spacerLg}rem;
  @media screen and ${BREAKPOINTS.tablet} {
    ${STEP_GRID.rhs}
  }
`;
const CardMain = ({ children }) => {
  return <CardMainStyled>{children}</CardMainStyled>;
};

export default CardMain;
