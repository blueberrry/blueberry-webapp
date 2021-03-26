import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import postJSON from '../../services/utils/post-json';
import { BREAKPOINTS, COLOURS, SIZES, RESETS } from '../../constants';
import { buildImgSrc, buildLogoImgSrc } from '../../utils';
import { fontSvgStyles } from '../detail/Detail';
import { getJSON } from '../../services/utils';
import FeedbackPopover from '../feedback-popover/FeedbackPopover';

const StyledListItemContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 1rem;
  @media screen and ${BREAKPOINTS.tablet} {
    margin-bottom: 0;
  }
`;

const StyledListItem = styled.section`
  position: relative;
  border-radius: ${SIZES.crdBrRd}rem;
  background-color: ${COLOURS.white};
  overflow: hidden;
  margin: 0.75rem 0 0 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  @media screen and ${BREAKPOINTS.tabletSm} {
    height: inherit;
    max-width: unset;
  }
  > .list-item-body {
    padding: 0 ${SIZES.spacerXXSm}rem;
    @media screen and ${BREAKPOINTS.tabletSm} {
      padding: 0 ${SIZES.spacerSm}rem;
    }
  }
`;

const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${SIZES.spacerXXSm}rem;
  min-height: 48px;
  align-items: center;
`;

const StyledListStatistics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${SIZES.spacerXXSm}rem;
`;

const StyledImageContainer = styled.div`
  height: 190px;
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
    // background-color: red;
    .back-button {
      display: block;
    }
    .close-button {
      display: none;
    }
    @media screen and ${BREAKPOINTS.tabletSm} {
      .back-button {
        display: none;
      }
      .close-button {
        display: block;
      }
    }
  }
  > .more-info-section {
    > .more-info-dealership-header {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      > img {
        width: 150px;
      }
    }
    > .more-info-dealership-body {
      margin-top: 0.75rem;
      padding: 0 0.75rem;
    }
    > .more-info-dealership-action {
      margin: 1.5rem 0;
      display: flex;
      justify-content: center;
    }
    > .more-info-img {
      overflow: hidden;
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
      margin: 0.75rem 0;
    }
  }
`;

const StyledMoreInfoSubHeader = styled.div`
  border-radius: 5px;
  background-color: ${COLOURS.graySecondary};
  width: 100%;
  padding: ${SIZES.spacerXXSm}rem;
`;

const BackChevron = () => (
  <svg
    style={{ ...fontSvgStyles, fill: 'none', marginRight: `${SIZES.spacerUltraSm}rem` }}
    viewBox='0 0 11 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.99927 1L2.09637 8.38313L10.1921 15.5543' stroke='currentColor' strokeWidth='2' />
  </svg>
);

const CloseIcon = () => (
  <svg
    class='svg-icon'
    style={{ ...fontSvgStyles, fill: 'none', marginRight: `${SIZES.spacerUltraSm}rem` }}
    viewBox='0 0 1024 1024'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M895.156706 86.256941a30.177882 30.177882 0 0 1 42.767059-0.180706c11.745882 11.745882 11.745882 30.870588-0.180706 42.767059L128.843294 937.743059c-11.866353 11.866353-30.930824 12.047059-42.767059 0.180706-11.745882-11.745882-11.745882-30.870588 0.180706-42.767059L895.156706 86.256941z'
      fill='#000000'
    />
    <path
      d='M86.076235 86.076235c11.745882-11.745882 30.870588-11.745882 42.767059 0.180706l808.899765 808.899765c11.866353 11.866353 12.047059 30.930824 0.180706 42.767059-11.745882 11.745882-30.870588 11.745882-42.767059-0.180706L86.256941 128.843294a30.177882 30.177882 0 0 1-0.180706-42.767059z'
      fill='#000000'
    />
    <path d='M0 0h1024v1024H0z' fill='#FFF4F4' fill-opacity='0' />
  </svg>
);

const FeedbackDeleteIcon = () => (
  <svg width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16.9298 1L9.06122 8.35111L17.1218 15.4912' stroke='#2C3D55' strokeWidth='2.5' />
    <path d='M1.19196 1L9.06057 8.35111L0.999992 15.4912' stroke='#2C3D55' strokeWidth='2.5' />
  </svg>
);

const StyledFeedbackAction = styled.div`
  position: absolute;
  z-index: 20;
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

const ListItem = ({ matchRate, data, resultsId, isDesktop, children }) => {
  const [feedbackVisibility, setFeedbackVisibility] = useState(false);

  const [showDraggableDrawer, setShowDraggableDrawer] = useState(false);
  const imgSrc = buildImgSrc(data['imgURL']);
  const toggleDraggableDrawer = () => setShowDraggableDrawer(!showDraggableDrawer);
  const dealerLogoImgSrc = buildLogoImgSrc(data.providerLogo);

  const [feedbackItems, setFeedbackItems] = useState({
    price: false,
    charge: false,
    range: false,
    speed: false,
    colour: false,
    size: false,
    make: false,
    other: false,
  });

  return (
    <StyledListItemContainer key={resultsId}>
      <StyledFeedbackAction>
        <Action
          // containerStyles={feedbackVisibility ? { backgroundColor: COLOURS.primaryMask } : {}}
          iconButton
          handleClick={(e) => {
            if (feedbackVisibility === true) {
              return;
            } else {
              e.preventDefault();
              setFeedbackVisibility(true);
            }
          }}>
          <FeedbackDeleteIcon />
        </Action>
      </StyledFeedbackAction>
      <StyledListItem>
        <StyledMatch>{`${matchRate}% match`}</StyledMatch>
        <StyledImageContainer>
          <Image src={imgSrc} alt={null} />
        </StyledImageContainer>
        <div className='list-item-body'>
          <MakeModel primary model={`${data['Make']} ${data['Model']}`} price={`£${data['OTR Price']}`} />
          <StyledListStatistics>
            <Indicators title={`Range`} score={data.rangeDial} info={`${data['Range (WLTP)']} miles`} />
            <Indicators title={`Charge`} score={data.chargeDial} info={`${data['FastCharge']} min`} />
            <Indicators title={`Power`} score={data.powerDial} info={`${data['HP']}bhp`} />
            <Indicators title={`Speed`} score={data.speedDial} info={`${data['Top Speed']}mph`} />
          </StyledListStatistics>
        </div>
        <Action
          handleClick={(e) => {
            e.preventDefault();
            toggleDraggableDrawer();
            const requestDetails = `/api/sel?selectedCarId=${data.UID}&resultID=${resultsId}`;
            postJSON(requestDetails);
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
      {feedbackVisibility && (
        <FeedbackPopover
          visibility={feedbackVisibility}
          setVisibility={setFeedbackVisibility}
          carId={data.UID}
          resultsId={resultsId}
          feedbackItems={feedbackItems}
          setFeedbackItems={setFeedbackItems}
        />
      )}
      <DraggableDrawer open={showDraggableDrawer} toggle={toggleDraggableDrawer}>
        <StyledMoreInfoModal>
          <div className='more-info-header'>
            <Action handleClick={() => toggleDraggableDrawer()}>
              <Text colour={COLOURS.primary} type='bodySemiBold'>
                <div className='back-button'>
                  <BackChevron />
                  Back
                </div>
                <div className='close-button'>
                  <CloseIcon />
                  Close
                </div>
              </Text>
            </Action>
          </div>
          <div className='more-info-section'>
            <div className='more-info-dealership-header'>
              <Text colour={COLOURS.primary} type='bodyBold'>
                Recommended dealership
              </Text>
              <Image src={dealerLogoImgSrc} />
              <StyledMoreInfoSubHeader>
                <Text colour={COLOURS.primary} type='h4'>
                  About
                </Text>
              </StyledMoreInfoSubHeader>
            </div>
            <div className='more-info-dealership-body'>
              <Text colour={COLOURS.primary} type='body' className='small'>
                {data.carDesc}
              </Text>
            </div>
            <div className='more-info-dealership-action'>
              <Action modalPrimary external={data.gotositeURL}>
                <Text type='bodySemiBold' colour={COLOURS.white}>
                  Go to site
                </Text>
              </Action>
            </div>
          </div>
          <div className='more-info-section'>
            <MakeModel secondary model={data['MakeModel']} price={`£${data['OTR Price']}`} />
            <div className='more-info-img'>
              <Image src={imgSrc} alt={null} />
            </div>
            <StyledMoreInfoSubHeader>
              <Text colour={COLOURS.primary} type='h4'>
                Price
              </Text>
            </StyledMoreInfoSubHeader>
            <Detail
              hr
              isExpandable={false}
              summaryLeft='Price Monthly'
              summaryRight={`From £${data['MonthlyPrice']}`}
            />
            <Detail isExpandable={false} summaryLeft='Price Outright' summaryRight={`From £${data['OTR Price']}`} />
            <StyledMoreInfoSubHeader>
              <Text colour={COLOURS.primary} type='h4'>
                Range
              </Text>
            </StyledMoreInfoSubHeader>
            <Detail isExpandable={false} summaryLeft='Expected range' summaryRight={`${data['Range (WLTP)']} miles`} />
            <StyledMoreInfoSubHeader>
              <Text colour={COLOURS.primary} type='h4'>
                Battery & charging time
              </Text>
            </StyledMoreInfoSubHeader>
            {/* <Detail
              isExpandable={true}
              summaryLeft='Battery capacity'
              summaryRight={`${data['Range (WLTP)']} miles`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            /> */}
            <Detail
              hr
              isExpandable={true}
              summaryLeft='Fast charge time'
              summaryRight={`${data['FastCharge']} mins`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
            <Detail
              hr
              isExpandable={true}
              summaryLeft='Normal charge time'
              summaryRight={`${data['NormalCharge']} mins`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
            <Detail
              isExpandable={true}
              summaryLeft='Slow charge time'
              summaryRight={`${data['SlowCharge']} mins`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
          </div>
        </StyledMoreInfoModal>
      </DraggableDrawer>
    </StyledListItemContainer>
  );
};

export default React.memo(ListItem);
