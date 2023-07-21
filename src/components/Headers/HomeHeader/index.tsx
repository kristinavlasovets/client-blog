'use client';

import React, { FC, useMemo } from 'react';
import Link from 'next/link';

import { useMyTranslation } from '@/app/i18n/client';
import { homeHeaderBackgroundColors } from '@/constants';
import posts from '@/shared/posts.json';
import { findAuthorById } from '@/utils/findAuthorById';

import styles from './styles.module.scss';

const { title, authorId, createdAt, id, image, preview, category } = posts[0];

const HomeHeader: FC = () => {
  const { t } = useMyTranslation();

  const { name } = useMemo(() => findAuthorById(Number(id)), [id]);

  const { mainColor, borderColor } = homeHeaderBackgroundColors;

  const backgroundStyle = {
    background: `linear-gradient(${mainColor}, ${borderColor}), url(${image})`,
  };

  return (
    <div className={styles.wrapper} style={backgroundStyle}>
      <div className={styles.header}>
        <h3 className={styles.label}>
          {t('BlogPostItem.createdAt')}
          <Link href={`/category/${category}`}>{category}</Link>
        </h3>
        <Link className={styles.title} href={`/blogPost/${id}`}>
          {title}
        </Link>
        <p className={styles.info}>
          {t('BlogHeader.author')} <Link href={`/author/${authorId}`}>{name}</Link> | {createdAt}
        </p>
        <p className={styles.preview}>{preview}</p>
        <Link href={`/blogPost/${id}`} className={styles.button}>
          {t('Home.aboutButton')}
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
