import { useState } from 'react';
import styled from 'styled-components';

const StyledSummary = styled.summary`
  display: flex;
  justify-content: space-between;
  &::-webkit-details-marker {
    display: none;
  }
  &:first-of-type {
    list-style-type: none;
  }
`;

const fontSvgStyles = {
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

const Detail = ({ isExpandable, summaryLeft, summaryRight, details }) => {
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
    <details onClick={onToggle}>
      <StyledSummary>
        <span>{summaryLeft}</span>
        <span>
          {summaryRight}
          <Arrows />
        </span>
      </StyledSummary>
      <p>{details}</p>
    </details>
  );
};

export default Detail;
