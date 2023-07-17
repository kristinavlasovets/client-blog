import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const Overview: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <article className={styles.overview}>
        <div className={styles.item}>
          <h2 className={styles.count}>12+</h2>
          <p className={styles.text}>{t('AboutUs.blogsPublished')}</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.count}>18K+</h2>
          <p className={styles.text}>{t('AboutUs.views')}</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.count}>30K+</h2>
          <p className={styles.text}> {t('AboutUs.usersTotal')}</p>
        </div>
      </article>
      <div className={styles.pattern}>
        <div className={styles.left} />
        <div className={styles.right} />
      </div>
    </div>
  );
};

export default Overview;
