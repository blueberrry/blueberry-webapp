import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
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
import { StyledAnchor } from '../../features/steps/step-2/Step2';
import { getJSON } from '../../services/utils';
import FeedbackPopover from '../feedback-popover/FeedbackPopover';
import { enableBodyScroll } from 'body-scroll-lock';

//icon lib
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

//icon lib
const BackChevron = () => (
  <svg
    style={{ ...fontSvgStyles, fill: 'none', marginRight: `${SIZES.spacerUltraSm}rem` }}
    viewBox='0 0 11 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.99927 1L2.09637 8.38313L10.1921 15.5543' stroke='currentColor' strokeWidth='2' />
  </svg>
);

const flashingBorderAnimation = (props) => {
  const SHADOW = `0px 0px 9px 4px #2C3D55`;
  return keyframes`
    0% {
      position: relative;
      z-index: 1000;
      box-shadow: ${SHADOW};
    }
    25% {
      position: relative;
      z-index: 1000;
      box-shadow: none;
    }
    75% {
      position: relative;
      z-index: 1000;
      box-shadow: ${SHADOW};
    }
    100% {
      z-index: 1000;

      box-shadow: none;
    }
  `;
};

const StyledMoreInfoModal = styled.div`
  padding: ${SIZES.spacerSm}rem;
  // min-height: 200vh;
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
  > .more-info-img {
    overflow: hidden;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
    margin: 0.75rem 0;
    position: relative;
    &.highlight {
      //animation: ${flashingBorderAnimation} 2.5s linear forwards;
      > img {
        z-index: 1000;
        animation: ${flashingBorderAnimation} 2.5s linear forwards;
      }
    }
  }
  > .more-info-section {
    > .highlight {
      animation: ${flashingBorderAnimation} 2.5s linear forwards;
    }
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
  }
`;

const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${SIZES.spacerXXSm}rem;
  min-height: 48px;
  align-items: center;
`;

const StyledMoreInfoSubHeader = styled.div`
  border-radius: 5px;
  background-color: ${COLOURS.graySecondary};
  width: 100%;
  padding: ${SIZES.spacerXXSm}rem;
`;

export const Badge = styled.span`
  align-self: center;
  border-radius: 1rem;
  background-color: ${(props) => props.colour};
  padding: 0 0.8rem;
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

export const ListItemModal = ({
  scrollTo,
  showDraggableDrawer,
  toggleDraggableDrawer,
  providerLogo,
  carDesc,
  gotositeURL,
  imgUrl,
  makeModel,
  otrPrice,
  monthlyPrice,
  range,
  fastCharge,
  normalCharge,
  slowCharge,
}) => {
  const dealerLogoImgSrc = buildLogoImgSrc(providerLogo);
  const imgSrc = buildImgSrc(imgUrl);

  const [canScrollUp, setCanScrollUp] = useState(false);

  const imgRef = useCallback(
    (node) => {
      if (node !== null) {
        if (scrollTo === 'img') {
          const el = node;
          el.classList.add('highlight');
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 450);
        }
      }
    },
    [scrollTo]
  );

  const moreInfoRef = useCallback(
    (node) => {
      if (node !== null) {
        if (scrollTo === 'price' || scrollTo === 'range' || scrollTo === 'charge') {
          const el = node;
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 450);
        }
      }
    },
    [scrollTo]
  );

  return (
    <DraggableDrawer
      open={showDraggableDrawer}
      toggle={toggleDraggableDrawer}
      canScrollUp={canScrollUp}
      setCanScrollUp={setCanScrollUp}>
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
              {carDesc}
            </Text>
          </div>
          <div className='more-info-dealership-action'>
            <Action modalPrimary external={gotositeURL}>
              <Text type='bodySemiBold' colour={COLOURS.white}>
                Go to site
              </Text>
            </Action>
          </div>
        </div>
        <div className='more-info-img' ref={imgRef}>
          <Image src={imgSrc} alt={null} />
        </div>
        <div className='more-info-section' ref={moreInfoRef}>
          <MakeModel secondary model={makeModel} price={`£${otrPrice}`} />
          <StyledMoreInfoSubHeader>
            <Text colour={COLOURS.primary} type='h4'>
              Price
            </Text>
          </StyledMoreInfoSubHeader>
          <div className={scrollTo === 'price' && 'highlight'}>
            <Detail
              hr
              isExpandable={false}
              summaryLeft='Monthly'
              summaryRight={`From £${monthlyPrice}`}
              className='price'
            />
            <Detail isExpandable={false} summaryLeft='Outright' summaryRight={`From £${otrPrice}`} />
          </div>
          <StyledMoreInfoSubHeader>
            <Text colour={COLOURS.primary} type='h4'>
              Range
            </Text>
          </StyledMoreInfoSubHeader>
          <div className={scrollTo === 'range' && 'highlight'}>
            <Detail isExpandable={false} summaryLeft='Expected range' summaryRight={`${range} miles`} />
          </div>
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
          <div className={scrollTo === 'charge' && 'highlight'}>
            <Detail
              hr
              isExpandable={true}
              summaryLeft='Fast charge time'
              summaryRight={`${fastCharge} mins`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
            <Detail
              hr
              isExpandable={true}
              summaryLeft='Normal charge time'
              summaryRight={`${normalCharge} mins`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
            <Detail
              hr
              isExpandable={true}
              summaryLeft='Slow charge time'
              summaryRight={`${slowCharge} mins`}
              details='Normal charge is when you would typically use your AC wall charger at home to charge your car. This is likely to be the most common charging scenario for most electric car users'
            />
          </div>
          <Text
            style={{ marginLeft: '12px', marginTop: '34px', display: 'flex', flexDirection: 'row' }}
            className='small'
            colour={`#707070`}>
            Car logos provided by
            <StyledAnchor href='https://clearbit.com/'>
              <span style={{ fontWeight: 600 }}> Clearbit</span>
            </StyledAnchor>
          </Text>
        </div>
      </StyledMoreInfoModal>
    </DraggableDrawer>
  );
};

export default ListItemModal;
