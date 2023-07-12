import React, { ReactNode } from 'react';
import { dir } from 'i18next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { languages } from '../i18n/settings';

import './globals.scss';

export const metadata = {
  title: 'Client Blog App',
  description: 'We are a community of content writers who share their learnings',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: { lng: 'ru' | 'en' };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Header lng={lng} />
        <main>{children}</main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
