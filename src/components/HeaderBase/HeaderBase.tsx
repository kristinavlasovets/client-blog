import React, { FC } from 'react';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

import { useTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';

import { HeaderProps } from '../Header/types';

import styles from '../Header/styles.module.scss';

const HeaderBase: FC<HeaderProps> = async ({ lng }) => {
  const { t } = await useTranslation(lng);

  return (
    <div className={styles.header_title}>
      <p className={styles.header_logo}>Modsen Client Blog</p>
      <div className={styles.switcher}>
        <Trans i18nKey="languageSwitcher" t={t}>
          switch from <strong>{lng}</strong> to:{' '}
        </Trans>
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}`} key={l}>
                {l}
              </Link>
            </span>
          ))}
      </div>
    </div>
  );
};

export default HeaderBase;
