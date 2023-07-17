import React, { FC } from 'react';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

import { useTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';

import { HeaderBaseProps } from './types';

import styles from './styles.module.scss';

const HeaderBase: FC<HeaderBaseProps> = async ({ lng, translationPath }) => {
  const { t } = await useTranslation(lng);

  return (
    <div className={styles.wrapper}>
      <div className={styles.switcher}>
        <Trans i18nKey="languageSwitcher" t={t}>
          <p className={styles.currentLng}>{lng}</p> |{' '}
        </Trans>
        {languages
          .filter((language) => lng !== language)
          .map((language, index) => (
            <p key={language}>
              {index > 0 && ' or '}
              <Link href={`/${language}/${translationPath}`} key={language}>
                {language}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default HeaderBase;
