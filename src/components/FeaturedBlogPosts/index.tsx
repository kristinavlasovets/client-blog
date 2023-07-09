import React, { FC } from 'react';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import posts from '@/shared/posts.json';
import { LanguageProps } from '@/types';

import BlogPostPreview from '../BlogPostPreview';
import FeaturedBlogPost from '../FeaturedBlogPost';

import styles from './styles.module.scss';

const FeaturedBlogPosts: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  const previewedPosts = posts.slice(0, 4);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{t('BlogHeader.label')}</h3>
        <FeaturedBlogPost lng={lng} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{t('Blog.subtitle')}</h3>
          <Link href="/blog">{t('Home.viewAllPosts')}</Link>
        </div>
        <div className={styles.preview}>
          {previewedPosts.map((post) => (
            <BlogPostPreview key={post.id} post={post} lng={lng} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPosts;
