import { useState } from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import { COLOURS } from '../../constants';

const StyledDetails = styled.details`
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSummary = styled.summary`
  display: flex;
  padding: 0 0.75rem;
  flex-direction: row !important;
  justify-content: space-between;
  outline: none;
  > div:first-of-type {
    margin-right: auto;
  }
  &::-webkit-details-marker {
    display: none;
  }
  &:first-of-type {
    list-style-type: none;
  }
`;

const StyledHr = styled.hr`
  margin: 0 0.75rem;
  height: 0.25px;
  opacity: 0.25;
  color: #e0e0e0;
`;

export const fontSvgStyles = {
  display: 'inline-flex',
  alignSelf: 'center',
  height: '1em',
  width: '1em',
  fill: 'currentColor',
  top: '.125em',
  position: 'relative',
};

const DownArrow = () => (
  <svg
    style={fontSvgStyles}
    ariaHidden='true'
    focusable='false'
    dataPrefix='fas'
    dataIcon='angle-down'
    class='svg-inline--fa fa-angle-down fa-w-10'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 320 512'>
    <path
      fill='currentColor'
      d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'></path>
  </svg>
);

const UpArrow = () => (
  <svg
    style={fontSvgStyles}
    ariaHidden='true'
    focusable='false'
    dataPrefix='fas'
    dataIcon='angle-up'
    class='svg-inline--fa fa-angle-up fa-w-10'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 320 512'>
    <path
      fill='currentColor'
      d='M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z'></path>
  </svg>
);

const Detail = ({ hr, isExpandable, summaryLeft, summaryRight, details, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = (e) => {
    if (!isExpandable) {
      e.preventDefault();
    }
    setIsOpen(!isOpen);
  };
  const Arrows = () => {
    if (isExpandable) {
      return isOpen ? <UpArrow /> : <DownArrow />;
    } else return <></>;
  };
  return (
    <>
      <StyledDetails onClick={onToggle}>
        <StyledSummary>
          <Text colour={COLOURS.primary} type='bodySemiBold' className='small'>
            {summaryLeft}
          </Text>
          <Text colour={COLOURS.primary} type='body' className='small'>
            {summaryRight}
            <Arrows />
          </Text>
        </StyledSummary>
        <p style={{ padding: '0 0.75rem' }}>
          <Text colour={COLOURS.primary} type='body' className='small'>
            {details}
          </Text>
        </p>
      </StyledDetails>
      {hr && <StyledHr />}
    </>
  );
};

export default Detail;
