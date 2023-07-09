import React, { FC } from 'react';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import authors from '@/shared/authors.json';
import posts from '@/shared/posts.json';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const HomeHeader: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  const { title, authorId, createdAt, id, image, preview, category } = posts[0];
  const { name } = authors.find((author) => author.id === authorId)!;

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${image})`,
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
