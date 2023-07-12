'use client';

import React, { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import HeaderBase from '../HeaderBase/HeaderBase';
import NavMenu from '../NavMenu';

import { HeaderProps } from './types';

import styles from './styles.module.scss';

const Header: FC<HeaderProps> = ({ lng }) => {
  const currentPath = usePathname();
  const translationPath = useMemo(() => currentPath.slice(4, currentPath.length), [currentPath]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <span className={styles.title}>Modsen Client Blog</span>
          <HeaderBase lng={lng} translationPath={translationPath} />
          <div className={styles.links}>
            <NavMenu variant="header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
