import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import Posts from '@/components/AllPosts/Posts';
import Categories from '@/components/Categories';
import BlogHeader from '@/components/Headers/BlogHeader';
import JoinOurTeam from '@/components/JoinOurTeam';
import posts from '@/shared/posts.json';
import { PageProps } from '@/types';

import styles from './styles.module.scss';

const Blog: FC<PageProps> = ({ params: { lng } }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <BlogHeader />
      <Posts lng={lng} posts={posts} postsTitle={t('Blog.subtitle')} />
      <Categories categoriesTitle={t('Blog.categoriesTitle')} titleAlign="left" />
      <JoinOurTeam lng={lng} />
    </div>
  );
};
export default Blog;
