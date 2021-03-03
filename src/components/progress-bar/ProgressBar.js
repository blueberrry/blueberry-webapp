import React from 'react';
import styled from 'styled-components';
import { COLOURS } from '../../constants';

const Track = styled.div`
  width: 100%;
  height: 1.5rem;
  background: ${COLOURS.white};
  border-radius: 3rem;
`;

const TrackCharged = styled.div`
  transition: width 1s;
  width: ${(props) => props.width};
  height: 1.5rem;
  background: ${COLOURS.secondary};
  border-radius: 3rem;
  display: grid;
  place-content: center;
`;

const ProgressBar = ({ step }) => {
  let width = '0%';
  if (step === 1) {
    width = '25%';
  }
  if (step === 2) {
    width = '50%';
  }
  if (step === 3) {
    width = '75%';
  }
  if (step === 3) {
    width = '75%';
  }
  if (step === 4) {
    width = '100%';
  }
  return (
    <Track className='progress-bar'>
      <TrackCharged width={width}>
        <svg width='12' height='18' viewBox='0 0 12 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.52997 8.85043L7.23997 0.472046L4.22924 7.35429H10.1469L2.98342 17.528L7.23997 8.85043H1.52997Z'
            fill='white'
            stroke='white'
          />
        </svg>
      </TrackCharged>
    </Track>
  );
};

export default ProgressBar;
