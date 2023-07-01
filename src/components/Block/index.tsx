import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageProps } from '@/types';

import styles from './styles.module.scss';

const Block: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <header className={styles.block}>
      <p>{t('Block.title')}</p>
    </header>
  );
};

export default Block;
