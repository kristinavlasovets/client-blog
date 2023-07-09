import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import posts from '@/shared/posts.json';

import RelatedBlogPost from '../RelatedBlogPost';

import { RelatedBlogPostsProps } from './types';

import styles from './styles.module.scss';

const RelatedBlogPosts: FC<RelatedBlogPostsProps> = (props) => {
  const { lng, blogPostId, category } = props;
  const { t } = serverTranslation(lng);

  const relatedBlogPosts = posts
    .filter((blogPost) => blogPost.id !== blogPostId && blogPost.category === category)
    .slice(0, 3);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{t('RelatedBlogPosts.title')}</h4>
      {relatedBlogPosts.length ? (
        <div className={styles.posts}>
          {relatedBlogPosts.map((blogPost) => (
            <RelatedBlogPost lng={lng} key={blogPost.id} blogPost={blogPost} />
          ))}
        </div>
      ) : (
        <p className={styles.message}>{t('RelatedBlogPosts.message')}</p>
      )}
    </div>
  );
};

export default RelatedBlogPosts;
