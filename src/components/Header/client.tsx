'use client';

import React, { FC } from 'react';

import { useClientTranslation } from '@/app/i18n/client';

import HeaderBase from './HeaderBase';
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ lng }) => {
  const { t } = useClientTranslation(lng, 'clientPage');
  return <HeaderBase t={t} lng={lng} />;
};

export default Header;
