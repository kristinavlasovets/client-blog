import React, { FC } from 'react';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

import { languages } from '@/app/i18n/settings';

import { HeaderProps } from './types';

import styles from './styles.module.scss';

const HeaderBase: FC<HeaderProps> = ({ t, lng }) => (
  <div className={styles.header_title}>
    <p className={styles.header_logo}>Modsen Client Blog</p>
    <div className={styles.switcher}>
      <Trans i18nKey="languageSwitcher" t={t}>
        switch from <strong>{lng}</strong> to:{' '}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l) => (
          <span key={l}>
            <Link href={`/${l}/`}>{l}</Link>
          </span>
        ))}
    </div>
  </div>
);

export default HeaderBase;
