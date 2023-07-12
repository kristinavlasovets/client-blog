'use client';

import React, { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { usePortal } from '@/hooks/usePortal';

import HeaderBase from '../HeaderBase/HeaderBase';
import NavMenu from '../NavMenu';
import Portal from '../Portal';
import VideoModal from '../VideoModal';

import { HeaderProps } from './types';

import styles from './styles.module.scss';

const Header: FC<HeaderProps> = ({ lng }) => {
  const { t } = useMyTranslation();

  const currentPath = usePathname();
  const translationPath = useMemo(() => currentPath.slice(4, currentPath.length), [currentPath]);

  const { state, onOpenPortal } = usePortal();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <span className={styles.title}>Modsen Client Blog</span>
          <HeaderBase lng={lng} translationPath={translationPath} />
          <div className={styles.links}>
            <NavMenu variant="header" />
            <button type="button" className={styles.button} onClick={onOpenPortal}>
              {t('Home.video')}
            </button>
          </div>
        </div>
      </div>

      <Portal isVisible={state}>
        <VideoModal />
      </Portal>
    </header>
  );
};

export default Header;
