import React, { FC } from 'react';

import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/types';

const PrivacyPolicy: FC<PageProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  return <h1>{t('PrivacyPolicy.title')} Page</h1>;
};
export default PrivacyPolicy;
