import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { icons } from '@/constants/icons';

import { AuthorProps } from './types';

import styles from './styles.module.scss';

const Author: FC<AuthorProps> = (props) => {
  const { id, name, image, company, facebook, instagram, linkedin, twitter, post } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <Link href={`/author/${id}`} className={styles.name}>
        {name}
      </Link>
      <p className={styles.post}>{`${post} ${company}`}</p>
      <div className={styles.socials}>
        <Link href={facebook}>{icons.facebook}</Link>
        <Link href={twitter}>{icons.twitter}</Link>
        <Link href={instagram}>{icons.instagram}</Link>
        <Link href={linkedin}>{icons.linkedin}</Link>
      </div>
    </div>
  );
};

export default Author;
