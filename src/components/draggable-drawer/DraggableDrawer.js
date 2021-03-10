import React, { useEffect, useRef } from 'react';
import Drawer from 'react-drag-drawer';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { COLOURS, DROP_SHADOWS } from '../../constants';
import './draggable-drawer.css';

const StyledDraggableIndicator = styled.div`
  position: absolute;
  left: 50%;
  right: -50%;
  transform: translateX(-50%);
  top: 0;
  top: 0.75rem;
  width: 4.5rem;
  height: 0.5rem;
  border-radius: 1rem;
  background-color: ${COLOURS.lighterGray};
  border: 1px solid ${COLOURS.lightGray};
`;

const DraggableDrawer = ({ open, toggle, children }) => {
  const targetRef = useRef();

  const isIos = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
    navigator.platform
  );

  useEffect(() => {
    if (!isIos) {
      if (open) {
        disableBodyScroll(targetRef.current);
      } else {
        enableBodyScroll(targetRef.current);
      }
    }
    return () => !isIos && clearAllBodyScrollLocks();
  }, [open, isIos]);

  return (
    <>
      <Drawer
        ref={targetRef}
        open={open}
        onRequestClose={toggle}
        allowClose={true}
        containerElementClass='modal'
        modalElementClass='modal-top-el'>
        <StyledDraggableIndicator className='draggable-indicator' />
        {children}
      </Drawer>
    </>
  );
};

export default DraggableDrawer;
