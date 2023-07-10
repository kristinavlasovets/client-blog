'use client';

import React, { FC } from 'react';
import dynamic from 'next/dynamic';

import { serverTranslation } from '@/app/i18n/client';
import Form from '@/components/Form';
import { PageProps } from '@/types';

import styles from './styles.module.scss';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

const ContactUs: FC<PageProps> = ({ params: { lng } }) => {
  const { t } = serverTranslation(lng);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1 className={styles.title}>{t('ContactUs.title')}</h1>
          <h2 className={styles.subtitle}>{t('ContactUs.subtitle')}</h2>
          <p className={styles.text}>{t('ContactUs.text')}</p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoWrapper}>
            <div className={styles.chapter}>
              <h6 className={styles.chapterTitle}>{t('ContactUs.workingHoursTitle')}</h6>
              <p className={styles.chapterText}>{t('ContactUs.workingDays')}</p>
              <p className={styles.chapterText}>{t('ContactUs.workingHours')}</p>
              <p className={styles.chapterNote}>{t('ContactUs.support')}</p>
            </div>
            <div className={styles.chapter}>
              <h6 className={styles.chapterTitle}>{t('ContactUs.title')}</h6>
              <p className={styles.chapterText}>020 7993 2905</p>
              <p className={styles.chapterNote}>hello@finsweet.com</p>
            </div>
          </div>
        </div>
        <Form />
      </div>
      <Map />
    </>
  );
};

export default ContactUs;
