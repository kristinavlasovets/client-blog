import React, { FC } from 'react';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const SpecialPost: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image} />
      <article className={styles.content}>
        <h4 className={styles.label}>{t('Home.whyLabel')}</h4>
        <h2 className={styles.title}>{t('Home.whyTitle')}</h2>
        <p className={styles.text}>{t('Home.whyText')}</p>
        <Link className={styles.button} href="/aboutUs" data-cy="why-button">
          {t('Home.whyButton')}
        </Link>
      </article>
    </div>
  );
};

export default SpecialPost;
