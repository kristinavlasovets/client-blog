import React, { FC } from 'react';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';

import { CategoryHeaderProps } from './types';

import styles from './styles.module.scss';

const CategoryHeader: FC<CategoryHeaderProps> = ({ category: { title, info }, lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.info}>{info}</p>
      <div className={styles.navigation}>
        <Link href="/blog">{t('Blog.title')}</Link>
        <p>{`> ${title}`}</p>
      </div>
    </div>
  );
};

export default CategoryHeader;
