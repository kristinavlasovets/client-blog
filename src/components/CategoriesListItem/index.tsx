'use client';

import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CategoriesListItemProps } from './types';

import styles from './styles.module.scss';

const CategoriesListItem: FC<CategoriesListItemProps> = ({
  category: { title, icon },
  isSelected,
}) => {
  const currentPath = usePathname();
  const translationPath = useMemo(() => currentPath.slice(1, 4), [currentPath]);

  return (
    <Link href={`/${translationPath}category/${title.toLocaleLowerCase()}`}>
      <div
        className={`${styles.category} ${isSelected && styles.selected}`}
        data-cy="chosenCategory"
      >
        <div className={styles.image}>
          <Image src={icon} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <h6 className={styles.title}>{title}</h6>
      </div>
    </Link>
  );
};

export default CategoriesListItem;
