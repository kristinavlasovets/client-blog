import React, { FC } from 'react';

import { PageProps } from '@/types';

import { useTranslation } from '../i18n';

import styles from './page.module.scss';

const Home: FC<PageProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{t('Home.title')} Page</h1>
      </div>
    </main>
  );
};

export default Home;
