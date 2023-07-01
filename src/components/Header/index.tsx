import React, { FC } from 'react';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';

import HeaderBase from '../HeaderBase/HeaderBase';

import { HeaderProps } from './types';

import styles from './styles.module.scss';

const Header: FC<HeaderProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  const path = 'privacyPolicy';
  return (
    <header className={styles.header}>
      <HeaderBase lng={lng} />
      <Link className={styles.header_link} href={`/${lng}/`}>
        {t('Home.title')}
      </Link>
      <Link className={styles.header_link} href={`/${lng}/${path}`}>
        {t('Blog.title')}
      </Link>
      <Link className={styles.header_link} href={`/${lng}/${path}`}>
        {t('AboutUs.title')}
      </Link>
      <Link className={styles.header_link} href={`/${lng}/${path}`}>
        {t('ContactUs.title')}
      </Link>
      <p>{t('Home.video')}</p>
    </header>
  );
};

export default Header;
