'use client';

import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './types';

const Portal: FC<PortalProps> = (props) => {
  const { children, isVisible } = props;

  // const [mounted, setMounted] = useState(true);

  // useEffect(() => {
  //   setMounted(false);

  //   return () => setMounted(false);
  // }, []);

  if (!isVisible) {
    return null;
  }
  return createPortal(<div>{children}</div>, document.body);

  // return mounted ? createPortal(<div>{children}</div>, document.body) : <>{null}</>;
};

export default Portal;
