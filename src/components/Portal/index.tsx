'use client';

import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './types';

const Portal: FC<PortalProps> = (props) => {
  const { children, isVisible } = props;

  if (!isVisible) {
    return null;
  }
  return createPortal(<div>{children}</div>, document.body);
};

export default Portal;
