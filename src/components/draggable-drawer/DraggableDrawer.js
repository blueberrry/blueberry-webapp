import React, { useEffect, useRef } from 'react';
import Drawer from 'react-drag-drawer';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import './draggable-drawer.css';

const DraggableDrawer = ({ open, toggle, children }) => {
  const targetRef = useRef();

  useEffect(() => {
    let targetElement = null;
    targetElement = targetRef.current;
    if (open) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
    return () => clearAllBodyScrollLocks();
  }, [open]);

  return (
    <Drawer
      ref={targetRef}
      open={open}
      onRequestClose={toggle}
      allowClose={true}
      containerElementClass='modal'
      modalElementClass='modal-top-el'>
      {children}
    </Drawer>
  );
};

export default DraggableDrawer;
