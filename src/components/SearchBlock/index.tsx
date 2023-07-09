import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import tags from '@/shared/tags.json';

import CategoriesList from '../CategoriesList';
import TagsSearch from '../TagsSearch';

import { SearchBlockProps } from './types';

import styles from './styles.module.scss';

const SearchBlock: FC<SearchBlockProps> = ({ currentCategory, lng, handleChooseTag }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <TagsSearch handleChooseTag={handleChooseTag} />
      <CategoriesList categoriesTitle={currentCategory} lng={lng} />
      <h3 className={styles.title}>{t('Category.tagsTitle')}</h3>
      <div className={styles.tagWrapper}>
        {tags.map((tag) => (
          <p className={styles.tag} onClick={handleChooseTag(tag)} key={tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchBlock;
