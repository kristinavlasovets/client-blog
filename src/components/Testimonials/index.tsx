import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageProps } from '@/types';

import Carousel from './Carousel';

import styles from './styles.module.scss';

const Testimonials: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        <div className={styles.testimonials}>
          <p className={styles.label}>{t('Home.testimonialsLabel')}</p>
          <p className={styles.title}>{t('Home.testimonialsTitle')}</p>
          <p className={styles.text}>{t('Home.testimonialsText')}</p>
        </div>
        <Carousel />
      </section>
    </div>
  );
};

export default Testimonials;
