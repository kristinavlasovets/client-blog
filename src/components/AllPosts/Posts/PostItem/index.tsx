import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Post } from '../types';

import styles from './styles.module.scss';

const PostItem: FC<Post> = (props) => {
  const { id, title, category, image, preview } = props;

  return (
    <Link href={`/blogPost/${id}`}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <article className={styles.content}>
          <p className={styles.category}>{category}</p>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.preview}>{preview}</p>
        </article>
      </div>
    </Link>
  );
};

export default PostItem;
