import { useState } from 'react';
import styled from 'styled-components';
import Text from '../text/Text';
import { COLOURS } from '../../constants';
import { DownArrow, UpArrow } from '../IconLibrary';

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
      return isOpen ? <UpArrow isFont /> : <DownArrow isFont />;
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
