'use client';

import React, { FC } from 'react';

import { PageProps } from '@/types';

import { useMyTranslation } from '../i18n/client';

import styles from './page.module.scss';

const Home: FC<PageProps> = () => {
  const { t } = useMyTranslation();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{t('Home.title')} Page</h1>
      </div>
    </main>
  );
};

export default Home;
