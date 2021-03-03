import React, { useEffect, useRef } from 'react';
import Drawer from 'react-drag-drawer';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import './draggable-drawer.css';

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
    <Drawer
      ref={targetRef}
      open={open}
      onRequestClose={toggle}
      allowClose={true}
      containerElementClass='modal'
      modalElementClass='modal-top-el'>
      {/* <div style={{ overflow: 'auto' }}>{children}</div> */}
      {children}
    </Drawer>
  );
};

export default DraggableDrawer;
