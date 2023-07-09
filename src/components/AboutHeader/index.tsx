import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const AboutHeader: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('AboutUs.title')}</h2>
        <p className={styles.headerTitle}>{t('AboutUs.headerTitle')}</p>
      </div>
      <div className={styles.text}>{t('AboutUs.headerText')}</div>
    </div>
  );
};

export default AboutHeader;
