import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { icons } from '@/constants/icons';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const PartnersList: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  const { partner1, partner2, partner3, partner4, partner5 } = icons;
  const partners = [
    { icon: partner1, id: 'partner 1' },
    { icon: partner2, id: 'partner 2' },
    { icon: partner3, id: 'partner 3' },
    { icon: partner4, id: 'partner 4' },
    { icon: partner5, id: 'partner 5' },
  ];

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
