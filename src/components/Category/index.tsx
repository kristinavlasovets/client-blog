'use client';

import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CategoryProps } from './types';

import styles from './styles.module.scss';

const Category: FC<CategoryProps> = (props) => {
  const {
    category: { icon, info, title, titleRus },
  } = props;

  const currentPath = usePathname();
  const translationPath = useMemo(() => currentPath.slice(1, 3), [currentPath]);

  return (
    <Link href={`/${translationPath}/category/${title.toLocaleLowerCase()}`}>
      <div className={styles.category}>
        <div className={styles.image}>
          <Image src={icon} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <h5 className={styles.title}>{translationPath === 'en' ? title : titleRus}</h5>
        <p className={styles.info}>{info}</p>
      </div>
    </Link>
  );
};

export default Category;
