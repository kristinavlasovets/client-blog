'use client';

import React, { FC, RefObject, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { icons } from '@/constants/icons';
import { footerNavMenu, headerNavMenu } from '@/constants/navMenu';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { checkIsPathActive } from '@/utils/checkIsPathActive';

import Drawer from './Drawer';
import Portal from './Portal';
import { NavMenuProps } from './types';

import styles from './styles.module.scss';

const NavMenu: FC<NavMenuProps> = ({ variant }) => {
  const { t, locale } = useMyTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const pathName = usePathname();

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsPortalOpen(isPortalOpen);
  }, [isPortalOpen]);

  const handleToggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
  };

  const handleTogglePortal = () => {
    setIsPortalOpen((prevState) => !prevState);
  };

  useOnClickOutside({ handler: handleTogglePortal, ref });

  const headerVariant = variant === 'header';
  const navigationMenu = headerVariant ? headerNavMenu : footerNavMenu;

  return (
    <>
      <nav className={styles.navMenu}>
        {navigationMenu.map(({ name, path }) => {
          const isActive = checkIsPathActive(pathName, path);
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
              const isActive = checkIsPathActive(pathName, path);
              return (
                <Link
                  key={name}
                  href={`/${locale}${path}`}
                  className={isActive ? styles.active : ''}
                  onClick={handleToggleDrawer}
                >
                  {t(name)}
                </Link>
              );
            })}
          </Drawer>

          <button type="button" className={styles.button} onClick={handleTogglePortal}>
            {t('Home.video')}
          </button>

          <button className={styles.burger} type="button" onClick={handleToggleDrawer}>
            {icons.burger}
          </button>

          <Portal isPortalOpen={isPortalOpen}>
            <div className={styles.video_wrapper}>
              <iframe
                ref={ref as RefObject<HTMLIFrameElement>}
                width="500px"
                height="300px"
                allowFullScreen
                title="video"
                className={styles.video}
                src="https://www.youtube.com/embed/zMf_xeGPn6s"
              />
            </div>
          </Portal>
        </>
      )}
    </>
  );
};

export default NavMenu;
