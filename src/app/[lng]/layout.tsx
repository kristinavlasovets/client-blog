import React from 'react';
import { dir } from 'i18next';

import Header from '@/components/Header';

import { languages } from '../i18n/settings';

import './globals.scss';

export const metadata = {
  title: 'Client Blog App',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: 'ru' | 'en' };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Header lng={lng} />
        {children}
      </body>
    </html>
  );
}
