'use client';

import React, { FC, Fragment, useEffect, useState } from 'react';

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

  const components = [
    <HomeHeader lng={lng} />,
    <FeaturedBlogPosts lng={lng} />,
    <MisionVision lng={lng} variant="" />,
    <Categories categoriesTitle={t('Home.categoriesTitle')} titleAlign="center" />,
    <SpecialPost lng={lng} />,
    <Authors lng={lng} variant="home" />,
    <PartnersList lng={lng} />,
    <Testimonials lng={lng} />,
    <JoinOurTeam lng={lng} />,
  ];

  const [displayedComponents, setDisplayedComponents] = useState(components.slice(0, 1));

  const handleScroll = () => {
    const footerHeight = document.getElementById('footer')?.clientHeight!;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - footerHeight
    ) {
      const nextComponent = components[displayedComponents.length];
      setDisplayedComponents([...displayedComponents, nextComponent]);
    }
  };

  useEffect(() => {
    if (displayedComponents.length !== components.length) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return () => {};
  }, [displayedComponents]);

  return (
    <div className={styles.wrapper}>
      {displayedComponents.map((component) => (
        <Fragment key={component.type.name}>{component}</Fragment>
      ))}
    </div>
  );
};

export default Home;
