'use client';

import React, { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { icons } from '@/constants/icons';
import { footerNavMenu, headerNavMenu } from '@/constants/navMenu';

import Drawer from '../Drawer';

import { NavMenuProps } from './types';

import styles from './styles.module.scss';

const NavMenu: FC<NavMenuProps> = ({ variant }) => {
  const { t, locale } = useMyTranslation();
  const pathName = usePathname();
  const headerVariant = variant === 'header';

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const handleOpenDrawer = () => {
    setIsOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
  };

  const navigationMenu = headerVariant ? headerNavMenu : footerNavMenu;

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
      {headerVariant && (
        <>
          <Drawer onClose={handleCloseDrawer} isOpen={isOpenDrawer}>
            {navigationMenu.map(({ name, path }) => {
              const isActive = pathName.replace(/ru(\/)?|en(\/)?/, '') === path;
              return (
                <Link
                  key={name}
                  href={`/${locale}${path}`}
                  className={isActive ? styles.active : ''}
                  onClick={handleCloseDrawer}
                >
                  {t(name)}
                </Link>
              );
            })}
          </Drawer>
          <button className={styles.burger} type="button" onClick={handleOpenDrawer}>
            {icons.burger}
          </button>
        </>
      )}
    </>
  );
};

export default NavMenu;
