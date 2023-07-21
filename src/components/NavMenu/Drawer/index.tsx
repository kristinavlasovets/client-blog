import React, { FC, useRef } from 'react';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import { DrawerProps } from './types';

import styles from './styles.module.scss';

const Drawer: FC<DrawerProps> = (props) => {
  const { onClose, isOpen, children } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside({ ref, handler: onClose });

  return (
    <div className={`${styles.overlay} ${isOpen && styles.overlayVisible}`}>
      <div ref={ref} className={styles.drawer}>
        <button type="button" onClick={onClose} className={styles.button}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
