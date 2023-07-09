import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import authors from '@/shared/authors.json';

import { RelatedBlogPostProps } from './types';

import styles from './styles.module.scss';

const RelatedBlogPost: FC<RelatedBlogPostProps> = (props) => {
  const {
    lng,
    blogPost: { authorId, createdAt, image, title, preview, id },
  } = props;
  const { t } = serverTranslation(lng);

  const { name } = authors.find((author) => author.id === authorId)!;

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <p className={styles.info}>
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
