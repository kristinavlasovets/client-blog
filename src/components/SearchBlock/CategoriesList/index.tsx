import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import categories from '@/shared/categories.json';

import CategoriesListItem from './CategoriesListItem';
import { CategoriesListProps } from './types';

import styles from './styles.module.scss';

const CategoriesList: FC<CategoriesListProps> = ({ categoriesTitle, lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('Category.title')}</h2>
      {categories.map((category) => (
        <CategoriesListItem
          isSelected={categoriesTitle.toLocaleLowerCase() === category.title.toLocaleLowerCase()}
          key={category.title}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
