import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import authors from '@/shared/authors.json';
import categories from '@/shared/categories.json';

import { BlogPostItemProps } from './types';

import styles from './styles.module.scss';

const BlogPostItem: FC<BlogPostItemProps> = (props) => {
  const {
    lng,
    blogPost: { category, authorId, createdAt, image, text, title: blogPostTitle },
  } = props;

  const { t } = serverTranslation(lng);
  const { icon, title: categoryTitle } = categories.find(
    ({ title }) => title.toLocaleLowerCase() === category
  )!;
  const currentAuthor = authors.find(({ id }) => id === +authorId)!;

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.author}>
            <div className={styles.authorImage}>
              <Image
                src={currentAuthor.image}
                alt={currentAuthor.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.info}>
              <Link className={styles.name} href={`/author/${authorId}`}>
                {currentAuthor.name}
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
      </div>
      <div className={styles.blogPostImage}>
        <Image src={image} alt={image} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default BlogPostItem;
