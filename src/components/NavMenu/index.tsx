'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { footerNavMenu, headerNavMenu } from '@/constants/navMenu';

import { NavMenuProps } from './types';

import styles from './styles.module.scss';

const NavMenu: FC<NavMenuProps> = ({ variant }) => {
  const { t, locale } = useMyTranslation();
  const pathName = usePathname();

  const navigationMenu = variant === 'header' ? headerNavMenu : footerNavMenu;

  return (
    <>
      <nav className={styles.navMenu}>
        {navigationMenu.map(({ name, path }) => {
          const isActive = pathName.replace(/ru(\/)?|en(\/)?/, '') === path;
          return (
            <Link key={name} href={`/${locale}${path}`} className={isActive ? styles.active : ''}>
              {t(name)}
            </Link>
          );
        })}
      </nav>
      <button type="button">
        <span />
      </button>
    </>
  );
};

export default NavMenu;
