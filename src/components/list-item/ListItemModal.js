import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Text from '../text/Text';
import Image from '../image/Image';
import Action from '../actions/Action';
import DraggableDrawer from '../draggable-drawer/DraggableDrawer';
import Detail from '../detail/Detail';
import { BREAKPOINTS, COLOURS, SIZES } from '../../constants';
import { buildImgSrc, buildLogoImgSrc } from '../../utils';
import { StyledAnchor } from '../../features/steps/step-2/Step2';
import { BackChevron, Close } from '../IconLibrary';

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
  > .more-info-header {
    // background-color: red;
    .back-button {
      display: block;
    }
    .close-button {
      display: none;
      > .close-button-text {
        margin-left: ${SIZES.spacerXXSm}rem;
      }
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
                <BackChevron isFont />
                Back
              </div>
              <div className='close-button'>
                <Close isFont />
                <span className='close-button-text'>Close</span>
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
