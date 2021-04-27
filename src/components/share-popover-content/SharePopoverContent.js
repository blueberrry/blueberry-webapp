import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import Text from '../text/Text';
import ShareLink from '../share-link/ShareLink';
import { SIZES, COLOURS, DROP_SHADOWS } from '../../constants';
import { Link } from '../../components/IconLibrary';

const StyledShareLinkContainer = styled.span`
  display: flex;
  padding: ${SIZES.spacerXSm}rem;
  > a:not(:last-of-type) {
    margin-right: ${SIZES.spacerXSm}rem;
  }
`;

const StyledCopyLink = styled.span`
  width: 80%;
  padding: ${SIZES.spacerXXSm}rem ${SIZES.spacerXXSm}rem;
  background-color: ${COLOURS.graySecondary};
  overflow: hidden;
  > p > span {
    white-space: nowrap;
  }
`;

const StyledCopied = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity ${(props) => props.copiedDuration || 1}s;
  background-color: ${COLOURS.dark};
  color: ${COLOURS.white};
  padding: ${SIZES.spacerUltraSm}rem ${SIZES.spacerXSm}rem;
  ${DROP_SHADOWS.secondaryActive}
  border-radius: 1rem;
  &.entering {
    opacity: 0;
  }
  &.entered {
    opacity: 1;
  }
  &.exiting {
    opacity: 0;
  }
  &.exited {
    opacity: 0;
  }
`;

const SharePopoverContent = ({ shareLink }) => {
  const [showCopied, setShowCopied] = useState(false);
  const copiedDuration = 500;

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, copiedDuration * 4);
  };

  return (
    <>
      <Text colour={COLOURS.primary} type='bodySemiBold'>
        Share this car
      </Text>
      <StyledShareLinkContainer>
        <ShareLink twitter url={shareLink} message='Check out this electric car I found on Neev' />
        <ShareLink facebook url={shareLink} message='Check out this electric car I found on Neev' />
      </StyledShareLinkContainer>
      <StyledCopyLink onClick={() => handleCopyLink(shareLink)}>
        <Text className='small'>
          <Link isFont colour='primary' />
          {shareLink}
        </Text>
      </StyledCopyLink>
      <Transition in={showCopied} mountOnEnter unmountOnExit timeout={copiedDuration}>
        {(state) => (
          <StyledCopied className={state} copiedDuration={copiedDuration / 1000} onClick={() => setShowCopied(false)}>
            <Text colour={COLOURS.white} className='small'>
              Copied!
            </Text>
          </StyledCopied>
        )}
      </Transition>
    </>
  );
};

export default SharePopoverContent;
