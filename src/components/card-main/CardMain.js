import styled from 'styled-components';
import { BREAKPOINTS, STEP_GRID, SIZES } from '../../constants';
import CardSwitch from '../card-switch/CardSwitch';
import CardRange from '../card-range/CardRange';

const CardMainStyled = styled.section`
  ${STEP_GRID.fullWidth};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  // margin: ${SIZES.spacerXSm}rem;
  margin: 0;
  padding: 0 ${SIZES.spacerXSm}rem;
  @media screen and ${BREAKPOINTS.tabletSm} {
    // justify-content: center;
    ${STEP_GRID.rhs}
  }

  > .card-switch {
    margin-top: 1rem;
    margin-bottom: auto;
  }
  > .message {
    margin-bottom: auto;
  }
  > .card-range {
    margin-top: 1rem;
    margin-bottom: auto;
  }

  @media screen and ${BREAKPOINTS.tabletSm} {
    > .card-switch {
      margin-bottom: unset;
    }
    > .message {
      margin-bottom: unset;
    }
    > .card-range {
      margin-bottom: unset;
    }
  }
`;

// ${(props) => !props.noMargin && `margin: ${SIZES.spacerLg}rem;`}
const CardMain = ({ children, noMargin }) => {
  return <CardMainStyled noMargin={noMargin}>{children}</CardMainStyled>;
};

export default CardMain;
