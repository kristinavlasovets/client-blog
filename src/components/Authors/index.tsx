import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import authors from '@/shared/authors.json';

import Author from '../Author';

import { AuthorsProps } from './types';

import styles from './styles.module.scss';

const Authors: FC<AuthorsProps> = ({ lng, variant }) => {
  const { t } = serverTranslation(lng);

  const authorsList = variant === 'home' ? authors.slice(0, 4) : authors;

  return (
    <div className={styles.wrapper} style={{ width: variant === 'home' ? '90%' : '100%' }}>
      <h5 className={styles.title}>{t('AboutUs.authors')}</h5>
      <div className={styles.grid}>
        {authorsList.map((author) => (
          <Author {...author} key={author.id} />
        ))}
      </div>
    </div>
  );
};

export default Authors;
