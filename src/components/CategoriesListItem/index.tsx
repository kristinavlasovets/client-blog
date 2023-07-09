import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CategoriesListItemProps } from './types';

import styles from './styles.module.scss';

const CategoriesListItem: FC<CategoriesListItemProps> = ({
  category: { title, icon },
  isSelected,
}) => (
  <Link href={`/category/${title.toLocaleLowerCase()}`}>
    <div className={`${styles.category} ${isSelected && styles.selected}`}>
      <div className={styles.image}>
        <Image src={icon} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <h6 className={styles.title}>{title}</h6>
    </div>
  </Link>
);

export default CategoriesListItem;
