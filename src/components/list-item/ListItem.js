import React, { useState } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShareLink from '../share-link/ShareLink';
import Text from '../text/Text';
import Image from '../image/Image';
import Indicators from '../indicators/Indicators';
import Action from '../actions/Action';
import postJSON from '../../services/utils/post-json';
import { BREAKPOINTS, COLOURS, SIZES, GUIDE_ROOT, GUIDE_DOMAIN } from '../../constants';
import { buildImgSrc } from '../../utils';
import FeedbackPopover from '../feedback-popover/FeedbackPopover';
import Popover from '../popover/Popover';
import ListItemModal from './ListItemModal';
import { FeedbackDelete, Share } from '../../components/IconLibrary';

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
    display: flex;
    flex-direction: column;
    padding: 0 ${SIZES.spacerXXSm}rem;
    @media screen and ${BREAKPOINTS.tabletSm} {
      padding: 0 ${SIZES.spacerSm}rem;
    }
  }
  ${(props) => props.popoverActive && `filter: blur(3px);`}
`;

const StyledListHeader = styled.div`
  width: 100%;
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
  margin-left: -10px;
  margin-right: -10px;
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
  display: flex;
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

const StyledFeedbackAction = styled.div`
  position: absolute;
  z-index: 20;
`;

const StyledShareButton = styled.span`
  margin-left: ${SIZES.spacerUltraSm}rem;
`;

const StyledShareLinkContainer = styled.span`
  display: flex;
  padding: ${SIZES.spacerXSm}rem;
  > a:not(:last-of-type) {
    margin-right: ${SIZES.spacerXSm}rem;
  }
`;

const ListItem = ({ matchRate, data, resultsId, isDesktop, children }) => {
  const initialPopoversVisibility = false;
  const [feedbackVisibility, setFeedbackVisibility] = useState(initialPopoversVisibility);
  const [shareVisibility, setShareVisibility] = useState(initialPopoversVisibility);

  const [showDraggableDrawer, setShowDraggableDrawer] = useState(false);
  const imgSrc = buildImgSrc(data['imgURL']);
  const toggleDraggableDrawer = () => setShowDraggableDrawer(!showDraggableDrawer);

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

  const [scrollToInDrawer, setScrollToInDrawer] = useState('');

  console.log('data', data);

  const shareLink = `${GUIDE_ROOT}${data.MakeModel}${GUIDE_DOMAIN}`;

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
          <FeedbackDelete />
        </Action>
      </StyledFeedbackAction>
      <StyledListItem popoverActive={feedbackVisibility || shareVisibility}>
        <StyledMatch>{`${matchRate}% match`}</StyledMatch>
        <Action
          handleClick={(e) => {
            e.preventDefault();
            setScrollToInDrawer('img');
            toggleDraggableDrawer();
          }}
          wrapper>
          <StyledImageContainer>
            <Image src={imgSrc} alt={null} />
          </StyledImageContainer>
        </Action>
        <div className='list-item-body'>
          <StyledListHeader>
            <span style={{ display: 'flex' }}>
              <Text type='h3' colour={COLOURS.primary}>
                {`${data['Make']} ${data['Model']}`}
              </Text>
              <StyledShareButton>
                <Action
                  handleClick={(e) => {
                    e.preventDefault();
                    setShareVisibility(true);
                  }}
                  wrapper={true}>
                  <Share colour='primary' />
                </Action>
              </StyledShareButton>
            </span>
            <Action
              handleClick={(e) => {
                e.preventDefault();
                setScrollToInDrawer('price');
                toggleDraggableDrawer();
              }}
              wrapper={true}>
              <Badge colour={COLOURS.lighterGray}>
                <Text colour={COLOURS.primary}>{`£${data['OTR Price']}`}</Text>
              </Badge>
            </Action>
          </StyledListHeader>
          <StyledListStatistics>
            <Action
              handleClick={(e) => {
                e.preventDefault();
                setScrollToInDrawer('range');
                toggleDraggableDrawer();
              }}
              wrapper={true}>
              <Indicators title={`Range`} score={data.rangeDial} info={`${data['Range (WLTP)']} miles`} />
            </Action>
            <Action
              handleClick={(e) => {
                e.preventDefault();
                setScrollToInDrawer('charge');
                toggleDraggableDrawer();
              }}
              wrapper={true}>
              <Indicators title={`Charge`} score={data.chargeDial} info={`${data['FastCharge']} min`} />
            </Action>

            <Indicators title={`Power`} score={data.powerDial} info={`${data['HP']}bhp`} />

            <Indicators title={`Speed`} score={data.speedDial} info={`${data['Top Speed']}mph`} />
          </StyledListStatistics>
        </div>
        <Action
          handleClick={(e) => {
            e.preventDefault();
            setScrollToInDrawer('');
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
      {shareVisibility && (
        <Popover visibility={shareVisibility} setVisibility={setShareVisibility}>
          <Text colour={COLOURS.primary} type='bodySemiBold'>
            Share this car
          </Text>
          <StyledShareLinkContainer>
            <ShareLink
              twitter
              // urlRoot='https://neev.uk/guides/'
              // urlPage={data.MakeModel}
              url={shareLink}
              message='Check out this electric car I found on Neev'
            />
            <ShareLink
              facebook
              // urlRoot='https://neev.uk/guides/'
              // urlPage={data.MakeModel}
              url={shareLink}
              message='Check out this electric car I found on Neev'
            />
          </StyledShareLinkContainer>
        </Popover>
      )}

      <ListItemModal
        scrollTo={scrollToInDrawer}
        showDraggableDrawer={showDraggableDrawer}
        toggleDraggableDrawer={toggleDraggableDrawer}
        providerLogo={data.providerLogo}
        carDesc={data.carDesc}
        gotositeURL={data.gotositeURL}
        imgUrl={data['imgURL']}
        makeModel={data['MakeModel']}
        otrPrice={data['OTR Price']}
        monthlyPrice={data['MonthlyPrice']}
        range={data['Range (WLTP)']}
        fastCharge={data['FastCharge']}
        normalCharge={data['NormalCharge']}
        slowCharge={data['SlowCharge']}
      />
    </StyledListItemContainer>
  );
};

export default React.memo(ListItem);
