'use client';

import React, { FC, Fragment } from 'react';

import FeaturedBlogPosts from '@/components/AllPosts/FeaturedBlogPosts';
import SpecialPost from '@/components/AllPosts/Posts/SpecialPost';
import Authors from '@/components/Authors';
import Categories from '@/components/Categories';
import HomeHeader from '@/components/Headers/HomeHeader';
import JoinOurTeam from '@/components/JoinOurTeam';
import MisionVision from '@/components/MisionVision';
import PartnersList from '@/components/PartnersList';
import Testimonials from '@/components/Testimonials';
import { useInfinityScroll } from '@/hooks/useInfinityScroll';
import { PageProps } from '@/types';

import { useMyTranslation } from '../i18n/client';

import styles from './page.module.scss';

const Home: FC<PageProps> = ({ params: { lng } }) => {
  const { t } = useMyTranslation();

  const components = [
    <HomeHeader />,
    <FeaturedBlogPosts lng={lng} />,
    <MisionVision lng={lng} variant="" />,
    <Categories categoriesTitle={t('Home.categoriesTitle')} titleAlign="center" />,
    <SpecialPost lng={lng} />,
    <Authors lng={lng} variant="home" />,
    <PartnersList lng={lng} />,
    <Testimonials lng={lng} />,
    <JoinOurTeam lng={lng} />,
  ];

  const displayedComponents = useInfinityScroll(components);

  return (
    <div className={styles.wrapper}>
      {displayedComponents.map((component) => (
        <Fragment key={component.type.name}>{component}</Fragment>
      ))}
    </div>
  );
};

export default Home;
