import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import Block from '@/components/Block';
import { PageProps } from '@/types';

const PrivacyPolicy: FC<PageProps> = ({ params: { lng } }) => {
  const { t } = serverTranslation(lng);
  return (
    <>
      <h1>{t('PrivacyPolicy.title')} Page</h1>
      <Block lng={lng} />
    </>
  );
};
export default PrivacyPolicy;
