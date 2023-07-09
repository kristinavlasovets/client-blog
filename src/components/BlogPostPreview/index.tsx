import React, { FC } from 'react';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import authors from '@/shared/authors.json';

import { BlogPostPreviewProps } from './types';

import styles from './styles.module.scss';

const BlogPostPreview: FC<BlogPostPreviewProps> = (props) => {
  const {
    post: { createdAt, title, authorId, id },
    lng,
  } = props;

  const { t } = serverTranslation(lng);

  const { name } = authors.find((author) => author.id === authorId)!;

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
