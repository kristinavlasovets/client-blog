import React, { FC } from 'react';
import Image from 'next/image';

import { serverTranslation } from '@/app/i18n/client';
import { socials } from '@/constants';

import { AuthorHeaderProps } from './types';

import styles from './styles.module.scss';

const AuthorHeader: FC<AuthorHeaderProps> = (props) => {
  const { lng, name, image, review } = props;

  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{`${t('Author.greeting')}${name}${t('Author.welcome')}`}</h3>
          <p className={styles.text}>{review}</p>
          <div className={styles.icons}>
            {socials.map(({ icon, href }) => (
              <a href={href} key={href}>
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.pattern}>
          <div className={styles.left} />
          <div className={styles.right} />
        </div>
      </section>
    </div>
  );
};

export default AuthorHeader;
