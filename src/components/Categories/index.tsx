import React, { FC } from 'react';

import Category from '@/components/Categories/Category';
import categories from '@/shared/categories.json';

import { CategoriesProps } from './types';

import styles from './styles.module.scss';

const Categories: FC<CategoriesProps> = ({ categoriesTitle, titleAlign }) => (
  <div className={styles.wrapper}>
    <h6 className={styles.title} style={{ textAlign: titleAlign }}>
      {categoriesTitle}
    </h6>
    <section className={styles.content}>
      {categories.map((category) => (
        <Category key={category.title} category={category} />
      ))}
    </section>
  </div>
);

export default Categories;
