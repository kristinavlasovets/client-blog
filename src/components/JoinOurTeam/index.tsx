import React, { FC } from 'react';
import Link from 'next/link';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const JoinOurTeam: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.title}>{t('JoinOurTeam.title')}</h6>
      <p className={styles.text}>{t('JoinOurTeam.text')}</p>
      <Link href="/contactUs" className={styles.button}>
        {t('JoinOurTeam.button')}
      </Link>
    </div>
  );
};

export default JoinOurTeam;
