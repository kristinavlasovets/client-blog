'use client';

import React, { FC, Fragment } from 'react';

import FeaturedBlogPosts from '@/components/AllPosts/FeaturedBlogPosts';
import SpecialPost from '@/components/AllPosts/Posts/SpecialPost';
import Authors from '@/components/Authors';
import Categories from '@/components/Categories';
import HomeHeader from '@/components/Headers/HomeHeader';
import JoinOurTeam from '@/components/JoinOurTeam';
import Layout from '@/components/Layout';
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
    <Layout>
      <FeaturedBlogPosts lng={lng} />
    </Layout>,
    <Layout>
      <MisionVision lng={lng} variant="" />
    </Layout>,
    <Layout>
      <Categories categoriesTitle={t('Home.categoriesTitle')} titleAlign="center" />
    </Layout>,
    <SpecialPost lng={lng} />,
    <Layout>
      <Authors lng={lng} variant="home" />
    </Layout>,
    <Layout>
      <PartnersList lng={lng} />
    </Layout>,
    <Layout>
      <Testimonials lng={lng} />
    </Layout>,
    <Layout>
      <JoinOurTeam lng={lng} />
    </Layout>,
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
