import React, { FC } from 'react';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';

import { MisionVisionProps } from './types';

import styles from './styles.module.scss';

const MisionVision: FC<MisionVisionProps> = ({ variant, lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.item}>
          {variant === 'vision' ? (
            <>
              <p className={styles.label}>{t('AboutUs.misionLabel')}</p>
              <p className={styles.title}>{t('AboutUs.misionTitle')}</p>
              <p className={styles.text}>{t('AboutUs.misionText')}</p>
            </>
          ) : (
            <>
              <p className={styles.label}>{t('Home.aboutLabel')}</p>
              <p className={styles.title}>{t('Home.aboutTitle')}</p>
              <p className={styles.text}>{t('Home.aboutText')}</p>
              <Link href="/aboutUs">{t('Home.aboutButton')}</Link>
            </>
          )}
        </div>
        <div className={styles.item}>
          {variant === 'vision' ? (
            <>
              <p className={styles.label}>{t('AboutUs.visionLabel')}</p>
              <p className={styles.title}>{t('AboutUs.visionTitle')}</p>
              <p className={styles.text}>{t('AboutUs.visionText')}</p>
            </>
          ) : (
            <>
              <p className={styles.label}>{t('AboutUs.misionLabel')}</p>
              <p className={styles.title}>{t('AboutUs.misionTitle')}</p>
              <p className={styles.text}>{t('AboutUs.misionText')}</p>
            </>
          )}
        </div>
      </div>
      {variant !== 'vision' && (
        <div className={styles.pattern}>
          <div className={styles.left} />
          <div className={styles.right} />
        </div>
      )}
    </div>
  );
};

export default MisionVision;
