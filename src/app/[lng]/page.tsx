'use client';

import React, { FC } from 'react';

import Authors from '@/components/Authors';
import Categories from '@/components/Categories';
import FeaturedBlogPosts from '@/components/FeaturedBlogPosts';
import HomeHeader from '@/components/HomeHeader';
import JoinOurTeam from '@/components/JoinOurTeam';
import MisionVision from '@/components/MisionVision';
import PartnersList from '@/components/PartnersList';
import SpecialPost from '@/components/SpecialPost';
import Testimonials from '@/components/Testimonials';
import { PageProps } from '@/types';

import { useMyTranslation } from '../i18n/client';

import styles from './page.module.scss';

const Home: FC<PageProps> = ({ params: { lng } }) => {
  const { t } = useMyTranslation();

  return (
    <main className={styles.wrapper}>
      <HomeHeader lng={lng} />
      <FeaturedBlogPosts lng={lng} />
      <MisionVision lng={lng} variant="" />
      <Categories categoriesTitle={t('Home.categoriesTitle')} titleAlign="center" />
      <SpecialPost lng={lng} />
      <Authors lng={lng} variant="home" />
      <PartnersList lng={lng} />
      <Testimonials lng={lng} />
      <JoinOurTeam lng={lng} />
    </main>
  );
};

export default Home;
