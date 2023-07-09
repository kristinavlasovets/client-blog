import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import authors from '@/shared/authors.json';
import posts from '@/shared/posts.json';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const FeaturedBlogPost: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  const { title, authorId, createdAt, id, image, preview } = posts[0];
  const { name } = authors.find((author) => author.id === authorId)!;

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
      <Link href={`/blogPost/${id}`} className={styles.button}>
        {t('BlogHeader.button')}
      </Link>
    </div>
  );
};

export default FeaturedBlogPost;
