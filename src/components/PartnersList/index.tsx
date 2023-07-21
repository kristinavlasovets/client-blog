import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { partners } from '@/constants';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const PartnersList: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.label}>{t('Home.partnersLabel')}</p>
        <p className={styles.title}>{t('Home.partnersTitle')}</p>
      </div>
      {partners.map(({ icon, id }) => (
        <div className={styles.icon} key={id}>
          {icon}
        </div>
      ))}
    </div>
  );
};

export default PartnersList;
