import React, { useState } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../text/Text';
import Image from '../image/Image';
import Indicators from '../indicators/Indicators';
import Action from '../actions/Action';
import DraggableDrawer from '../draggable-drawer/DraggableDrawer';
import Detail from '../detail/Detail';
import TempImage from '../../assets/images/listing-images/_default-listing-img.png';
import TempImageDealership from '../../assets/images/listing-images/_default-dealership.png';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { buildImgSrc } from '../../utils';

const StyledListItemContainer = styled.div`
  position: relative;
  // height: 100%;
`;

const StyledListItem = styled.section`
  position: relative;
  border-radius: ${SIZES.crdBrRd}rem;
  background-color: ${COLOURS.white};
  overflow: hidden;
  margin: 0 auto ${SIZES.spacerXSm}rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  @media screen and ${BREAKPOINTS.tablet} {
    // min-height: 20.5rem;
    height: inherit;
    max-width: unset;
    margin: 0;
    // margin: 0 ${SIZES.spacerXSm}rem ${SIZES.spacerXSm}rem 0;
  }
  > .list-item-body {
    padding: 0 ${SIZES.spacerXXSm}rem;
    @media screen and ${BREAKPOINTS.tablet} {
      padding: 0 ${SIZES.spacerSm}rem;
    }
  }
`;

const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${SIZES.spacerXXSm}rem;
`;

const StyledListStatistics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${SIZES.spacerXXSm}rem;
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
  align-self: center;
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

const StyledMoreInfoModal = styled.div`
  padding: ${SIZES.spacerSm}rem;
  > .more-info-header {
    background-color: red;
  }
  > .more-info-section {
    > .more-info-dealership-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      > img {
        max-width: 200px;
      }
    }
    > .more-info-dealership-action {
      display: flex;
      justify-content: center;
    }
    > .more-info-img {
      overflow: hidden;
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
    }
  }
`;

const StyledMoreInfoSubHeader = styled.div`
  border-radius: 5px;
  background-color: ${COLOURS.graySecondary};
  width: 100%;
  padding: ${SIZES.spacerXXSm}rem;
`;

const MakeModel = ({ model, price, primary, secondary }) => {
  return (
    <StyledListHeader>
      <Text type='h3' colour={COLOURS.primary}>
        {model}
      </Text>
      <Badge colour={primary ? COLOURS.lighterGray : COLOURS.primary}>
        <Text colour={primary ? COLOURS.primary : COLOURS.white}>{price}</Text>
      </Badge>
    </StyledListHeader>
  );
};

const ListItem = ({ matchRate, data, children }) => {
  const [showDraggableDrawer, setShowDraggableDrawer] = useState(false);
  const imgSrc = buildImgSrc(data['imgURL']);
  const toggleDraggableDrawer = () => setShowDraggableDrawer(!showDraggableDrawer);
  return (
    <StyledListItemContainer>
      <StyledListItem>
        <StyledMatch>{`${matchRate}% match`}</StyledMatch>
        <StyledImageContainer>
          <Image src={imgSrc} />
        </StyledImageContainer>
        <div className='list-item-body'>
          <MakeModel primary model={data['MakeModel']} price={`£${data['OTR Price']}`} />
          <StyledListStatistics>
            <Indicators title={`Range`} score={5} info={`${data['Range (WLTP)']} miles`} />
            <Indicators title={`Charge`} score={5} info={`${data['FastCharge']} min`} />
            <Indicators title={`Power`} score={5} info={`${data['HP']}bhp`} />
            <Indicators title={`Speed`} score={5} info={`${data['Range (WLTP)']}mph`} />
          </StyledListStatistics>
        </div>
        <Action
          handleClick={(e) => {
            e.preventDefault();
            toggleDraggableDrawer();
            ReactGA.event({
              category: 'Conversion',
              action: 'Click',
              label: 'More Info',
              nonInteraction: false,
            });
            ReactGA.set({ dimension1: data.UID });
          }}
          fullWidth>
          <Text type='bodySemiBold' colour={COLOURS.white} className='main-action'>
            More info
          </Text>
        </Action>
      </StyledListItem>
      <DraggableDrawer open={showDraggableDrawer} toggle={toggleDraggableDrawer}>
        <StyledMoreInfoModal>
          <div className='more-info-header'>
            <Action handleClick={() => toggleDraggableDrawer()}>
              <Text colour={COLOURS.primary}>&lt; Back</Text>
            </Action>
          </div>
          <div className='more-info-section'>
            <div className='more-info-dealership-header'>
              <Text colour={COLOURS.primary}>Recommended dealership</Text>
              <Image src={TempImageDealership} />
              <StyledMoreInfoSubHeader>
                <Text colour={COLOURS.primary}>About Tesla</Text>
              </StyledMoreInfoSubHeader>
            </div>
            <Text>
              Tesla’s mission is to accelerate the world’s transition to sustainable energy. Tesla believes the faster
              the world stops relying on fossil fuels and moves towards a zero-emission future, the better.
            </Text>
            <div className='more-info-dealership-action'>
              <Action
                modalPrimary
                onPress={(e) => {
                  e.preventDefault();
                }}>
                <Text type='bodySemiBold' colour={COLOURS.white}>
                  Go to site
                </Text>
              </Action>
            </div>
          </div>
          <div className='more-info-section'>
            <MakeModel primary model={data['MakeModel']} price={`£${data['OTR Price']}`} />
            <div className='more-info-img'>
              <Image src={imgSrc} />
            </div>
            <StyledMoreInfoSubHeader>
              <Text colour={COLOURS.primary}>Price</Text>
            </StyledMoreInfoSubHeader>
            <Detail isExpandable={false} summaryLeft='Price Monthly' summaryRight={`From £${data['MonthlyPrice']}`} />
            <Detail isExpandable={false} summaryLeft='Price Outright' summaryRight={`From £${data['OTR Price']}`} />
            <StyledMoreInfoSubHeader>
              <Text colour={COLOURS.primary}>Range</Text>
            </StyledMoreInfoSubHeader>
            <Detail isExpandable={false} summaryLeft='Expected range' summaryRight={`${data['Range (WLTP)']} miles`} />
            <StyledMoreInfoSubHeader>
              <Text colour={COLOURS.primary}>Battery & charging time</Text>
            </StyledMoreInfoSubHeader>
            {/* <Detail
              isExpandable={true}
              summaryLeft='Battery capacity'
              summaryRight={`${data['Range (WLTP)']} miles`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            /> */}
            <Detail
              isExpandable={true}
              summaryLeft='Fast charge time'
              summaryRight={`${data['FastCharge']} mins`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
            <Detail
              isExpandable={true}
              summaryLeft='Normal charge time'
              summaryRight={`${data['NormalCharge']} miles`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
            <Detail
              isExpandable={true}
              summaryLeft='Slow charge time'
              summaryRight={`${data['SlowCharge']} miles`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
          </div>
        </StyledMoreInfoModal>
      </DraggableDrawer>
    </StyledListItemContainer>
  );
};

export default React.memo(ListItem);
