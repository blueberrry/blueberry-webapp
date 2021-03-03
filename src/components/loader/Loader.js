import styled from 'styled-components';
import Text from '../text/Text';
import './loader.css';
import { COLOURS } from '../../constants';
const Loader = () => {
  const StyledLoader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  return (
    <StyledLoader>
      <svg width='60' viewBox='0 0 19 30' fill='none' xmlns='http://www.w3.org/2000/svg' className='bolt'>
        <path d='M1 16.8261L10.7143 1L8.89286 12.5652H18L6.46429 29L10.1071 16.8261H1Z' fill='#21867A' stroke='white' />
      </svg>
      <Text colour={COLOURS.white}>Getting your matches</Text>
    </StyledLoader>
  );
};

export default Loader;
