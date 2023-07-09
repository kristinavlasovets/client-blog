'use client';

import React, { FC, useState } from 'react';

import CategoryHeader from '@/components/CategoryHeader';
import Posts from '@/components/Posts';
import SearchBlock from '@/components/SearchBlock';
import categories from '@/shared/categories.json';
import posts from '@/shared/posts.json';

import { CategoryPageProps } from './types';

import styles from './styles.module.scss';

const Category: FC<CategoryPageProps> = ({ params: { lng, title } }) => {
  const [chosenTag, setChosenTag] = useState<string>('');

  const currentCategory = categories.find(
    (category) => category.title.toLocaleLowerCase() === title
  )!;

  const postsByCategory = posts.filter(({ category }) => category === title);
  const postsByCloudTag = postsByCategory.filter(({ tags }) => tags.includes(chosenTag));
  const arePostsByCloudTagExists = postsByCloudTag.length;
  const postsByCategoryAndCloudTag = chosenTag && !arePostsByCloudTagExists ? [] : postsByCategory;

  const handleChooseTag = (tag: string) => () => {
    setChosenTag(tag);
  };

  return (
    <div className={styles.wrapper}>
      <CategoryHeader category={currentCategory} lng={lng} />
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
    </div>
  );
};
export default Category;
