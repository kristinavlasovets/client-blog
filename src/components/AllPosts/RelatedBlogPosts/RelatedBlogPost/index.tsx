'use client';

import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useMyTranslation } from '@/app/i18n/client';
import { findAuthorById } from '@/utils/findAuthorById';

import { RelatedBlogPostProps } from './types';

import styles from './styles.module.scss';

const RelatedBlogPost: FC<RelatedBlogPostProps> = (props) => {
  const {
    blogPost: { authorId, createdAt, image, title, preview, id },
  } = props;
  const { t } = useMyTranslation();

  const { name } = useMemo(() => findAuthorById(Number(authorId)), [authorId]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <p className={styles.info} data-testid="blopPostInfo">
        {t('BlogHeader.author')} <Link href={`/author/${authorId}`}>{name}</Link> | {createdAt}
      </p>
      <Link className={styles.title} href={`/blogPost/${id}`}>
        {title}
      </Link>
      <p className={styles.preview}>{preview}</p>
    </div>
  );
};

export default RelatedBlogPost;
