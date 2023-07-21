'use client';

import React, { FC, useCallback, useMemo, useState } from 'react';

import Posts from '@/components/AllPosts/Posts';
import CategoryHeader from '@/components/Headers/CategoryHeader';
import Layout from '@/components/Layout';
import SearchBlock from '@/components/SearchBlock';
import categories from '@/shared/categories.json';
import posts from '@/shared/posts.json';

import { CategoryPageProps } from './types';

import styles from './styles.module.scss';

const Category: FC<CategoryPageProps> = ({ params: { lng, title } }) => {
  const [chosenTag, setChosenTag] = useState<string>('');

  const currentCategory = useMemo(
    () => categories.find((category) => category.title.toLocaleLowerCase() === title)!,
    [title]
  );

  const postsByCategory = useMemo(
    () => posts.filter(({ category }) => category === title),
    [title]
  );

  const handleChooseTag = useCallback(
    (tag: string) => () => {
      setChosenTag(tag);
    },
    [chosenTag]
  );

  const postsByCloudTag = postsByCategory.filter(({ tags }) => tags.includes(chosenTag));
  const arePostsByCloudTagExists = postsByCloudTag.length;
  const postsByCategoryAndCloudTag = chosenTag && !arePostsByCloudTagExists ? [] : postsByCategory;

  return (
    <div className={styles.wrapper}>
      <CategoryHeader category={currentCategory} lng={lng} />
      <Layout>
        <div className={styles.content}>
          <div className={styles.posts}>
            <Posts
              posts={
                chosenTag && arePostsByCloudTagExists ? postsByCloudTag : postsByCategoryAndCloudTag
              }
              postsTitle=""
              lng={lng}
            />
          </div>
          <SearchBlock
            lng={lng}
            currentCategory={currentCategory.title}
            handleChooseTag={handleChooseTag}
          />
        </div>
      </Layout>
    </div>
  );
};
export default Category;
