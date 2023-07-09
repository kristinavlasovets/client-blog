import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import authors from '@/shared/authors.json';
import posts from '@/shared/posts.json';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const BlogHeader: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  const { title, authorId, createdAt, id, image, preview } = posts[0];
  const { name } = authors.find((author) => author.id === authorId)!;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.post}>
          <p className={styles.label}>{t('BlogHeader.label')}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.info}>
            {t('BlogHeader.author')} <Link href={`/author/${authorId}`}>{name}</Link> | {createdAt}
          </p>
          <p className={styles.preview}>{preview}</p>
          <Link href={`/blogPost/${id}`} className={styles.button}>
            {t('BlogHeader.button')}
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
