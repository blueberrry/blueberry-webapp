import styled from 'styled-components';
import { BREAKPOINTS, STEP_GRID, SIZES, COLOURS, CARD_MAX_WIDTH } from '../../constants';
import CardSwitch from '../card-switch/CardSwitch';
import CardRange from '../card-range/CardRange';

const CardMainStyled = styled.section`
  ${STEP_GRID.fullWidth};
  // height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${SIZES.spacerXSm}rem ${SIZES.spacerXSm}rem ${SIZES.spacerXSm}rem;
  padding: ${SIZES.spacerMd}rem;
  background: ${COLOURS.white};
  max-width: ${CARD_MAX_WIDTH};
  border-radius: ${SIZES.crdBrRd}rem;
  @media screen and (min-width: 440px) {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    width: calc(100% - ${SIZES.spacerXSm * 2}rem);
  }
  @media screen and ${BREAKPOINTS.tabletSm} {
    padding-top: 50px;
  }
`;

// ${(props) => !props.noMargin && `margin: ${SIZES.spacerLg}rem;`}
const CardMain = ({ children, noMargin }) => {
  return (
    <CardMainStyled noMargin={noMargin} className='card-main'>
      {children}
    </CardMainStyled>
  );
};

export default CardMain;
