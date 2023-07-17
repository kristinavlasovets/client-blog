'use client';

import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useMyTranslation } from '@/app/i18n/client';
import categories from '@/shared/categories.json';
import { findAuthorById } from '@/utils/findAuthorById';

import { BlogPostItemProps } from './types';

import styles from './styles.module.scss';

const BlogPostItem: FC<BlogPostItemProps> = (props) => {
  const {
    blogPost: { category, authorId, createdAt, image, text, title: blogPostTitle },
  } = props;

  const { t } = useMyTranslation();

  const { icon, title: categoryTitle } = categories.find(
    ({ title }) => title.toLocaleLowerCase() === category
  )!;

  const { image: currentAuthorImage, name: currentAuthorName } = useMemo(
    () => findAuthorById(Number(authorId)),
    [authorId]
  );

  return (
    <div className={styles.wrapper}>
      <section className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.author}>
            <div className={styles.authorImage}>
              <Image
                src={currentAuthorImage}
                alt={currentAuthorName}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.info}>
              <Link className={styles.name} href={`/author/${authorId}`}>
                {currentAuthorName}
              </Link>
              <p className={styles.createdAt}>
                {t('BlogPostItem.createdAt')}
                {createdAt}
              </p>
            </div>
          </div>
          <h3 className={styles.title}>{blogPostTitle}</h3>
          <div className={styles.category}>
            <div className={styles.icon}>
              <Image src={icon} alt={category} fill style={{ objectFit: 'cover' }} />
            </div>
            <Link className={styles.categoryTitle} href={`/category/${category}`}>
              {categoryTitle}
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.blogPostImage}>
        <Image src={image} alt={image} fill style={{ objectFit: 'cover' }} />
      </div>
      <article className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default BlogPostItem;
