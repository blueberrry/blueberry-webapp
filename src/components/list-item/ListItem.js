import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../text/Text';
import Image from '../image/Image';
import Indicators from '../indicators/Indicators';
import Action from '../actions/Action';
import TempImage from '../../assets/images/listing-images/_default-listing-img.png';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { buildImgSrc } from '../../utils';

const StyledListItem = styled.section`
  position: relative;
  border-radius: ${SIZES.crdBrRd}rem;
  background-color: ${COLOURS.white};
  overflow: hidden;
  margin: ${SIZES.spacerXSm}rem auto ${SIZES.spacerXSm}rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  @media screen and ${BREAKPOINTS.tablet} {
    min-height: 20.5rem;
    max-width: unset;
    margin: 0 ${SIZES.spacerXSm}rem ${SIZES.spacerXSm}rem 0;
  }
`;

const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  @media screen and ${BREAKPOINTS.tablet} {
    padding: 0 ${SIZES.spacerSm}rem;
  }
`;

const StyledListStatistics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0.2rem;
  @media screen and ${BREAKPOINTS.tablet} {
    padding: 0 ${SIZES.spacerSm}rem;
  }
`;

const StyledImageContainer = styled.div`
  height: 40%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Badge = styled.span`
  border-radius: 1rem;
  background-color: ${(props) => props.colour};
  padding: 0 0.8rem;
`;

const StyledMatch = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${COLOURS.white};
  border-radius: 1rem;
  padding: 0.25rem 0.75rem;
  z-index: 20;
`;

const ListItem = ({ matchRate, data, children }) => {
  const imgSrc = buildImgSrc(data['imgURL']);
  return (
    <div style={{ position: 'relative' }}>
      <StyledListItem>
        <StyledMatch>{`${matchRate}% match`}</StyledMatch>
        <StyledImageContainer>
          <Image src={imgSrc} />
        </StyledImageContainer>
        <StyledListHeader>
          <Text>{data['MakeModel']}</Text>
          <Badge colour={COLOURS.lightGray}>
            <Text>{`£${data['OTR Price']}`}</Text>
          </Badge>
        </StyledListHeader>
        <StyledListStatistics>
          <Indicators title={`Range`} score={5} info={`${data['Range (WLTP)']} miles`} />
          <Indicators title={`Charge time`} score={5} info={`${data['FastCharge']} min`} />
          <Indicators title={`Power`} score={5} info={`${data['HP']}bhp`} />
          <Indicators title={`Speed`} score={5} info={`${data['Range (WLTP)']}mph`} />
        </StyledListStatistics>
        <Action
          handleClick={(e) => {
            e.preventDefault();
            console.log('clicked');
          }}
          fullWidth>
          <Text type='bodySemiBold' colour={COLOURS.white} className='main-action'>
            More info
          </Text>
        </Action>
      </StyledListItem>
    </div>
  );
};

export default ListItem;
