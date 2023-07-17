'use client';

import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useMyTranslation } from '@/app/i18n/client';
import posts from '@/shared/posts.json';
import { findAuthorById } from '@/utils/findAuthorById';

import styles from './styles.module.scss';

const FeaturedBlogPost: FC = () => {
  const { t } = useMyTranslation();

  const { title, authorId, createdAt, id, image, preview } = posts[0];
  const { name } = useMemo(() => findAuthorById(Number(id)), [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <p className={styles.info}>
        {t('BlogHeader.author')} <Link href={`/author/${authorId}`}>{name}</Link> | {createdAt}
      </p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.preview}>{preview}</p>
      <Link href={`/blogPost/${id}`} className={styles.button} data-cy="featuredPost-button">
        {t('BlogHeader.button')}
      </Link>
    </div>
  );
};

export default FeaturedBlogPost;
