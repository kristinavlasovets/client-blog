import React, { FC } from 'react';
import Link from 'next/link';

import { useTranslation } from '@/app/i18n';

import HeaderBase from './HeaderBase';
import { HeaderProps } from './types';

import styles from './styles.module.scss';

const Header: FC<HeaderProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng);

  const pathName = 'privacyPolicy';
  return (
    <header className={styles.header}>
      <HeaderBase t={t} lng={lng} />
      <Link className={styles.header_link} href={`/${lng}/`}>
        {t('Home.title')}
      </Link>
      <Link className={styles.header_link} href={`/${lng}/${pathName}`}>
        {t('Blog.title')}
      </Link>
      <Link className={styles.header_link} href={`/${lng}/${pathName}`}>
        {t('AboutUs.title')}
      </Link>
      <Link className={styles.header_link} href={`/${lng}/${pathName}`}>
        {t('ContactUs.title')}
      </Link>
      <p>{t('Home.video')}</p>
    </header>
  );
};

export default Header;
