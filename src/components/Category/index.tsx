import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CategoryProps } from './types';

import styles from './styles.module.scss';

const Category: FC<CategoryProps> = (props) => {
  const {
    category: { icon, info, title },
  } = props;

  return (
    <Link href={`/category/${title.toLocaleLowerCase()}`}>
      <div className={styles.category}>
        <div className={styles.image}>
          <Image src={icon} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.info}>{info}</p>
      </div>
    </Link>
  );
};

export default Category;
