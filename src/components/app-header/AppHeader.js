import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/neev-logo.svg';
import { Image, Text } from '../../components';
import { COLOURS, SIZES } from '../../constants';
const AppHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${SIZES.spacerXSm}rem;
`;
const AppHeader = () => {
  return (
    <AppHeaderStyled>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src={logo} alt='Neev logo' />
        &nbsp;
        <Text type='h1' colour={COLOURS.white} className='logo'>
          Neev
        </Text>
      </div>
      <svg
        height='32px'
        version='1.1'
        viewBox='0 0 32 32'
        width='32px'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'>
        <path
          fill={COLOURS.white}
          d='M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z'
        />
      </svg>
    </AppHeaderStyled>
  );
};

export default AppHeader;
