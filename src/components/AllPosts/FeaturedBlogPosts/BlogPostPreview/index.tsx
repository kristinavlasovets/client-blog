'use client';

import React, { FC, useMemo } from 'react';
import Link from 'next/link';

import { useMyTranslation } from '@/app/i18n/client';
import { findAuthorById } from '@/utils/findAuthorById';

import { BlogPostPreviewProps } from './types';

import styles from './styles.module.scss';

const BlogPostPreview: FC<BlogPostPreviewProps> = (props) => {
  const {
    post: { createdAt, title, authorId, id },
  } = props;

  const { t } = useMyTranslation();

  const { name } = useMemo(() => findAuthorById(Number(id)), [id]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.info}>
        {t('BlogHeader.author')} <Link href={`/author/${authorId}`}>{name}</Link> | {createdAt}
      </p>
      <Link className={styles.title} href={`/blogPost/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default BlogPostPreview;
